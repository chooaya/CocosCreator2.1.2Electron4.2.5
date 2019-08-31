Editor.UI.idtree = (() => {
  'use strict';

  function _getLastChildRecursively ( itemEL ) {
    if ( itemEL.foldable && !itemEL.folded ) {
      return _getLastChildRecursively ( Polymer.dom(itemEL).lastElementChild );
    }
    return itemEL;
  }

  function _checkFoldable ( el ) {
    return Polymer.dom(el).childNodes.length > 0;
  }

  let idtree = {
    'ui-idtree': true,

    created () {
      this._id2el = {};
      this._activeElement = null;
    },

    addItem ( parentEL, itemEL, options ) {
      options = options || {};
      for ( var p in options ) {
        itemEL[p] = options[p];
      }

      let id = options.id;
      if ( id === null || id === undefined ) {
        throw new Error( 'The id you provide is invalid: ' + id );
      }

      //
      if ( this._id2el[id] ) {
        throw new Error( 'The id already added in the tree: ' + id );
      }

      //
      let name = options.name || '';
      let folded = options.folded;
      if ( folded === null || folded === undefined ) {
        folded = true;
      }

      // init item element
      itemEL._userId = id;
      itemEL.name = name;
      itemEL.folded = folded;
      if ( itemEL.foldable === undefined ) {
        itemEL.foldable = false;
      }

      // append to parent
      if ( parentEL.insertItem ) {
        parentEL.insertItem(itemEL);
      } else {
        Polymer.dom(parentEL).appendChild(itemEL);
      }

      if ( parentEL !== this ) {
        parentEL.foldable = true;
      }

      // add to id table
      this._id2el[id] = itemEL;
    },

    updateItemID ( itemEL, newID ) {
      delete this._id2el[itemEL._userId];
      itemEL._userId = newID;
      this._id2el[newID] = itemEL;
    },

    removeItem ( itemEL ) {
      let parentEL = Polymer.dom(itemEL).parentNode;
      Polymer.dom(parentEL).removeChild(itemEL);

      if ( parentEL !== this ) {
        parentEL.foldable = _checkFoldable(parentEL);
      }

      let self = this;
      function deleteRecursively (itemEL) {
        delete self._id2el[itemEL._userId];

        // children
        let children = Polymer.dom(itemEL).children;
        for ( let i = 0; i < children.length; ++i ) {
          deleteRecursively(children[i]);
        }
      }
      deleteRecursively(itemEL);
    },

    removeItemById (id) {
      let el = this._id2el[id];
      if ( el ) {
        this.removeItem(el);
      }
    },

    setItemParent ( itemEL, parentEL ) {
      if ( Editor.UI.PolymerUtils.isSelfOrAncient( parentEL, itemEL ) ) {
        throw new Error('Failed to set item parent to its child');
      }

      let oldParentEL = Polymer.dom(itemEL).parentNode;

      //
      if ( parentEL.insertItem ) {
        parentEL.insertItem(itemEL);
      } else {
        Polymer.dom(parentEL).appendChild(itemEL);
      }
      parentEL.foldable = _checkFoldable(parentEL);

      //
      if ( oldParentEL !== this ) {
        oldParentEL.foldable = _checkFoldable(oldParentEL);
      }
    },

    setItemParentById (id, parentId) {
      let itemEL = this._id2el[id];
      if ( !itemEL ) {
        return;
      }

      let parentEL = parentId ? this._id2el[parentId] : this;
      if ( !parentEL ) {
        return;
      }
      this.setItemParent(itemEL, parentEL);
    },

    renameItemById (id, newName) {
      let itemEL = this._id2el[id];
      if ( !itemEL ) {
        return;
      }
      itemEL.name = newName;
    },

    nextItem ( curItem, skipChildren ) {
      let curItemDOM = Polymer.dom(curItem);
      if ( !skipChildren && curItem.foldable && !curItem.folded ) {
        return curItemDOM.firstElementChild;
      }

      if ( curItemDOM.nextElementSibling ) {
        return curItemDOM.nextElementSibling;
      }

      let parentEL = curItemDOM.parentNode;
      if ( parentEL === this ) {
        return null;
      }

      return this.nextItem(parentEL, true);
    },

    prevItem ( curItem ) {
      let curItemDOM = Polymer.dom(curItem);

      let prevSiblingEL = curItemDOM.previousSibling;
      if ( prevSiblingEL ) {
        if ( prevSiblingEL.foldable && !prevSiblingEL.folded ) {
          return _getLastChildRecursively (prevSiblingEL);
        }

        return prevSiblingEL;
      }

      let parentEL = curItemDOM.parentNode;
      if ( parentEL === this ) {
        return null;
      }

      return parentEL;
    },

    lastItem () {
      let lastChildEL = Polymer.dom(this).lastElementChild;
      if ( lastChildEL && lastChildEL.foldable && !lastChildEL.folded ) {
        return _getLastChildRecursively (lastChildEL);
      }
      return lastChildEL;
    },

    clear () {
      let thisDOM = Polymer.dom(this);
      while (thisDOM.firstChild) {
        thisDOM.removeChild(thisDOM.firstChild);
      }
      this._id2el = {};
    },

    expand ( id, expand ) {
      let itemEL = this._id2el[id];
      let parentEL = Polymer.dom(itemEL).parentNode;
      while ( parentEL ) {
        if ( parentEL === this ) {
          break;
        }

        parentEL.folded = !expand;
        parentEL = Polymer.dom(parentEL).parentNode;
      }
    },

    scrollToItem ( el ) {
      window.requestAnimationFrame(() => {
        this.$.content.scrollTop = el.offsetTop + 16 - this.offsetHeight/2;
      });
    },

    selectItemById ( id ) {
      let itemEL = this._id2el[id];
      if ( itemEL ) {
        itemEL.selected = true;
      }
    },

    unselectItemById ( id ) {
      let itemEL = this._id2el[id];
      if ( itemEL ) {
        itemEL.selected = false;
      }
    },

    activeItemById ( id ) {
      let itemEL = this._id2el[id];
      if ( itemEL ) {
        this._activeElement = itemEL;
      }
    },

    deactiveItemById ( id ) {
      if ( this._activeElement && this._activeElement._userId === id ) {
        this._activeElement = null;
      }
    },

    activeItem ( itemEL ) {
      this._activeElement = itemEL;
    },

    deactiveItem ( itemEL ) {
      if ( itemEL && this._activeElement === itemEL ) {
        this._activeElement = null;
      }
    },

    dumpItemStates () {
      let states = [];

      for ( let id in this._id2el ) {
        if ( this._id2el[id].foldable ) {
          states.push({
            id: this._id2el[id]._userId,
            folded: this._id2el[id].folded
          });
        }
      }

      return states;
    },

    restoreItemStates (states) {
      if ( !states ) {
        return;
      }

      states.forEach(state => {
        let itemEL = this._id2el[state.id];
        if ( itemEL ) {
          itemEL.folded = state.folded;
        }
      });
    },

    getToplevelElements ( ids ) {
      let elements = new Array(ids.length);
      for ( let i = 0; i < ids.length; ++i ) {
        elements[i] = this._id2el[ids[i]];
      }

      let resultELs = Editor.Utils.arrayCmpFilter ( elements, ( elA, elB ) => {
        if ( elA.contains(elB) ) {
          return 1;
        }

        if ( elB.contains(elA) ) {
          return -1;
        }

        return 0;
      });
      return resultELs;
    },
  };

  return idtree;
})();
