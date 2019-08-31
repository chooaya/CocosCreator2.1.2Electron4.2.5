(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/collider/CCContact.js';
    var __require = nodeEnv ? function (request) {
        return require(request);
    } : function (request) {
        return __quick_compile__.require(request, __filename);
    };
    function __define(exports, require, module) {
        if (!nodeEnv) {
            __quick_compile__.registerModule(__filename, module);
        }
                'use strict';
        var Intersection = require('./CCIntersection');
        var CollisionType = cc.Enum({
            None: 0,
            CollisionEnter: 1,
            CollisionStay: 2,
            CollisionExit: 3
        });
        function Contact(collider1, collider2) {
            this.collider1 = collider1;
            this.collider2 = collider2;
            this.touching = false;
            var isCollider1Polygon = collider1 instanceof cc.BoxCollider || collider1 instanceof cc.PolygonCollider;
            var isCollider2Polygon = collider2 instanceof cc.BoxCollider || collider2 instanceof cc.PolygonCollider;
            var isCollider1Circle = collider1 instanceof cc.CircleCollider;
            var isCollider2Circle = collider2 instanceof cc.CircleCollider;
            if (isCollider1Polygon && isCollider2Polygon) {
                this.testFunc = Intersection.polygonPolygon;
            } else if (isCollider1Circle && isCollider2Circle) {
                this.testFunc = Intersection.circleCircle;
            } else if (isCollider1Polygon && isCollider2Circle) {
                this.testFunc = Intersection.polygonCircle;
            } else if (isCollider1Circle && isCollider2Polygon) {
                this.testFunc = Intersection.polygonCircle;
                this.collider1 = collider2;
                this.collider2 = collider1;
            } else {
                cc.errorID(6601, cc.js.getClassName(collider1), cc.js.getClassName(collider2));
            }
        }
        Contact.prototype.test = function () {
            var world1 = this.collider1.world;
            var world2 = this.collider2.world;
            if (!world1.aabb.intersects(world2.aabb)) {
                return false;
            }
            if (this.testFunc === Intersection.polygonPolygon) {
                return this.testFunc(world1.points, world2.points);
            } else if (this.testFunc === Intersection.circleCircle) {
                return this.testFunc(world1, world2);
            } else if (this.testFunc === Intersection.polygonCircle) {
                return this.testFunc(world1.points, world2);
            }
            return false;
        };
        Contact.prototype.updateState = function () {
            var result = this.test();
            var type = CollisionType.None;
            if (result && !this.touching) {
                this.touching = true;
                type = CollisionType.CollisionEnter;
            } else if (result && this.touching) {
                type = CollisionType.CollisionStay;
            } else if (!result && this.touching) {
                this.touching = false;
                type = CollisionType.CollisionExit;
            }
            return type;
        };
        Contact.CollisionType = CollisionType;
        module.exports = Contact;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDQ29udGFjdC5qcyIsIkM6L1VzZXJzL25hbnRhcy9maXJlYmFsbC14L2ZiXzIxLXJlbGVhc2UvZW5naW5lL2NvY29zMmQvY29yZS9jb2xsaWRlci9DQ0NvbnRhY3QuanMiXSwibmFtZXMiOlsiSW50ZXJzZWN0aW9uIiwicmVxdWlyZSIsIkNvbGxpc2lvblR5cGUiLCJjYyIsIkVudW0iLCJOb25lIiwiQ29sbGlzaW9uRW50ZXIiLCJDb2xsaXNpb25TdGF5IiwiQ29sbGlzaW9uRXhpdCIsIkNvbnRhY3QiLCJjb2xsaWRlcjEiLCJjb2xsaWRlcjIiLCJ0b3VjaGluZyIsImlzQ29sbGlkZXIxUG9seWdvbiIsIkJveENvbGxpZGVyIiwiUG9seWdvbkNvbGxpZGVyIiwiaXNDb2xsaWRlcjJQb2x5Z29uIiwiaXNDb2xsaWRlcjFDaXJjbGUiLCJDaXJjbGVDb2xsaWRlciIsImlzQ29sbGlkZXIyQ2lyY2xlIiwidGVzdEZ1bmMiLCJwb2x5Z29uUG9seWdvbiIsImNpcmNsZUNpcmNsZSIsInBvbHlnb25DaXJjbGUiLCJlcnJvcklEIiwianMiLCJnZXRDbGFzc05hbWUiLCJwcm90b3R5cGUiLCJ0ZXN0Iiwid29ybGQxIiwid29ybGQiLCJ3b3JsZDIiLCJhYWJiIiwiaW50ZXJzZWN0cyIsInBvaW50cyIsInVwZGF0ZVN0YXRlIiwicmVzdWx0IiwidHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFBLE9BQUEsR0FBQSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQTs7Ozs7Ozs7Ozs7OztRQTBCQSxJQUFJQSxZQUFBQSxHQUFlQyxPQUFBQSxDQUFRLGtCQUFSQSxDQUFuQjtRQUVBLElBQUlDLGFBQUFBLEdBQWdCQyxFQUFBQSxDQUFHQyxJQUFIRCxDQUFRO0FBQUEsWUFDeEJFLElBQUFBLEVBQU0sQ0FEa0I7QUFBQSxZQUV4QkMsY0FBQUEsRUFBZ0IsQ0FGUTtBQUFBLFlBR3hCQyxhQUFBQSxFQUFlLENBSFM7QUFBQSxZQUl4QkMsYUFBQUEsRUFBZSxDQUpTO0FBQUEsU0FBUkwsQ0FBcEI7UUFPQSxTQUFTTSxPQUFULENBQWtCQyxTQUFsQixFQUE2QkMsU0FBN0IsRUFBd0M7QUFBQSxZQUNwQyxLQUFLRCxTQUFMLEdBQWlCQSxTQUFqQixDQURvQztBQUFBLFlBRXBDLEtBQUtDLFNBQUwsR0FBaUJBLFNBQWpCLENBRm9DO0FBQUEsWUFJcEMsS0FBS0MsUUFBTCxHQUFnQixLQUFoQixDQUpvQztBQUFBLFlBTXBDLElBQUlDLGtCQUFBQSxHQUFzQkgsU0FBQUEsWUFBcUJQLEVBQUFBLENBQUdXLFdBQXhCSixJQUF5Q0EsU0FBQUEsWUFBcUJQLEVBQUFBLENBQUdZLGVBQTNGLENBTm9DO0FBQUEsWUFPcEMsSUFBSUMsa0JBQUFBLEdBQXNCTCxTQUFBQSxZQUFxQlIsRUFBQUEsQ0FBR1csV0FBeEJILElBQXlDQSxTQUFBQSxZQUFxQlIsRUFBQUEsQ0FBR1ksZUFBM0YsQ0FQb0M7QUFBQSxZQVFwQyxJQUFJRSxpQkFBQUEsR0FBb0JQLFNBQUFBLFlBQXFCUCxFQUFBQSxDQUFHZSxjQUFoRCxDQVJvQztBQUFBLFlBU3BDLElBQUlDLGlCQUFBQSxHQUFvQlIsU0FBQUEsWUFBcUJSLEVBQUFBLENBQUdlLGNBQWhELENBVG9DO0FBQUEsWUFXcEMsSUFBSUwsa0JBQUFBLElBQXNCRyxrQkFBMUIsRUFBOEM7QUFBQSxnQkFDMUMsS0FBS0ksUUFBTCxHQUFnQnBCLFlBQUFBLENBQWFxQixjQUE3QixDQUQwQztBQUFBLGFBQTlDLE1BR0ssSUFBSUosaUJBQUFBLElBQXFCRSxpQkFBekIsRUFBNEM7QUFBQSxnQkFDN0MsS0FBS0MsUUFBTCxHQUFnQnBCLFlBQUFBLENBQWFzQixZQUE3QixDQUQ2QztBQUFBLGFBQTVDLE1BR0EsSUFBSVQsa0JBQUFBLElBQXNCTSxpQkFBMUIsRUFBNkM7QUFBQSxnQkFDOUMsS0FBS0MsUUFBTCxHQUFnQnBCLFlBQUFBLENBQWF1QixhQUE3QixDQUQ4QztBQUFBLGFBQTdDLE1BR0EsSUFBSU4saUJBQUFBLElBQXFCRCxrQkFBekIsRUFBNkM7QUFBQSxnQkFDOUMsS0FBS0ksUUFBTCxHQUFnQnBCLFlBQUFBLENBQWF1QixhQUE3QixDQUQ4QztBQUFBLGdCQUU5QyxLQUFLYixTQUFMLEdBQWlCQyxTQUFqQixDQUY4QztBQUFBLGdCQUc5QyxLQUFLQSxTQUFMLEdBQWlCRCxTQUFqQixDQUg4QztBQUFBLGFBQTdDLE1BS0E7QUFBQSxnQkFDRFAsRUFBQUEsQ0FBR3FCLE9BQUhyQixDQUFXLElBQVhBLEVBQWlCQSxFQUFBQSxDQUFHc0IsRUFBSHRCLENBQU11QixZQUFOdkIsQ0FBbUJPLFNBQW5CUCxDQUFqQkEsRUFBZ0RBLEVBQUFBLENBQUdzQixFQUFIdEIsQ0FBTXVCLFlBQU52QixDQUFtQlEsU0FBbkJSLENBQWhEQSxFQURDO0FBQUEsYUF6QitCO0FBQUE7UUE4QnhDTSxPQUFBQSxDQUFRa0IsU0FBUmxCLENBQWtCbUIsSUFBbEJuQixHQUF5QixZQUFZO0FBQUEsWUFDakMsSUFBSW9CLE1BQUFBLEdBQVMsS0FBS25CLFNBQUwsQ0FBZW9CLEtBQTVCLENBRGlDO0FBQUEsWUFFakMsSUFBSUMsTUFBQUEsR0FBUyxLQUFLcEIsU0FBTCxDQUFlbUIsS0FBNUIsQ0FGaUM7QUFBQSxZQUlqQyxJQUFJLENBQUNELE1BQUFBLENBQU9HLElBQVBILENBQVlJLFVBQVpKLENBQXVCRSxNQUFBQSxDQUFPQyxJQUE5QkgsQ0FBTCxFQUEwQztBQUFBLGdCQUN0QyxPQUFPLEtBQVAsQ0FEc0M7QUFBQSxhQUpUO0FBQUEsWUFRakMsSUFBSSxLQUFLVCxRQUFMLEtBQWtCcEIsWUFBQUEsQ0FBYXFCLGNBQW5DLEVBQW1EO0FBQUEsZ0JBQy9DLE9BQU8sS0FBS0QsUUFBTCxDQUFjUyxNQUFBQSxDQUFPSyxNQUFyQixFQUE2QkgsTUFBQUEsQ0FBT0csTUFBcEMsQ0FBUCxDQUQrQztBQUFBLGFBQW5ELE1BR0ssSUFBSSxLQUFLZCxRQUFMLEtBQWtCcEIsWUFBQUEsQ0FBYXNCLFlBQW5DLEVBQWlEO0FBQUEsZ0JBQ2xELE9BQU8sS0FBS0YsUUFBTCxDQUFjUyxNQUFkLEVBQXNCRSxNQUF0QixDQUFQLENBRGtEO0FBQUEsYUFBakQsTUFHQSxJQUFJLEtBQUtYLFFBQUwsS0FBa0JwQixZQUFBQSxDQUFhdUIsYUFBbkMsRUFBa0Q7QUFBQSxnQkFDbkQsT0FBTyxLQUFLSCxRQUFMLENBQWNTLE1BQUFBLENBQU9LLE1BQXJCLEVBQTZCSCxNQUE3QixDQUFQLENBRG1EO0FBQUEsYUFkdEI7QUFBQSxZQWtCakMsT0FBTyxLQUFQLENBbEJpQztBQUFBLFNBQXJDdEI7UUFxQkFBLE9BQUFBLENBQVFrQixTQUFSbEIsQ0FBa0IwQixXQUFsQjFCLEdBQWdDLFlBQVk7QUFBQSxZQUN4QyxJQUFJMkIsTUFBQUEsR0FBUyxLQUFLUixJQUFMLEVBQWIsQ0FEd0M7QUFBQSxZQUd4QyxJQUFJUyxJQUFBQSxHQUFPbkMsYUFBQUEsQ0FBY0csSUFBekIsQ0FId0M7QUFBQSxZQUl4QyxJQUFJK0IsTUFBQUEsSUFBVSxDQUFDLEtBQUt4QixRQUFwQixFQUE4QjtBQUFBLGdCQUMxQixLQUFLQSxRQUFMLEdBQWdCLElBQWhCLENBRDBCO0FBQUEsZ0JBRTFCeUIsSUFBQUEsR0FBT25DLGFBQUFBLENBQWNJLGNBQXJCK0IsQ0FGMEI7QUFBQSxhQUE5QixNQUlLLElBQUlELE1BQUFBLElBQVUsS0FBS3hCLFFBQW5CLEVBQTZCO0FBQUEsZ0JBQzlCeUIsSUFBQUEsR0FBT25DLGFBQUFBLENBQWNLLGFBQXJCOEIsQ0FEOEI7QUFBQSxhQUE3QixNQUdBLElBQUksQ0FBQ0QsTUFBRCxJQUFXLEtBQUt4QixRQUFwQixFQUE4QjtBQUFBLGdCQUMvQixLQUFLQSxRQUFMLEdBQWdCLEtBQWhCLENBRCtCO0FBQUEsZ0JBRS9CeUIsSUFBQUEsR0FBT25DLGFBQUFBLENBQWNNLGFBQXJCNkIsQ0FGK0I7QUFBQSxhQVhLO0FBQUEsWUFnQnhDLE9BQU9BLElBQVAsQ0FoQndDO0FBQUEsU0FBNUM1QjtRQW9CQUEsT0FBQUEsQ0FBUVAsYUFBUk8sR0FBd0JQLGFBQXhCTztRQUVBNkIsTUFBQUEsQ0FBT0MsT0FBUEQsR0FBaUI3QixPQUFqQjZCIiwiZmlsZSI6IkNDQ29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXHJcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXHJcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxyXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xyXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxyXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXHJcblxyXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cclxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHJcbnZhciBJbnRlcnNlY3Rpb24gPSByZXF1aXJlKCcuL0NDSW50ZXJzZWN0aW9uJyk7XHJcblxyXG52YXIgQ29sbGlzaW9uVHlwZSA9IGNjLkVudW0oe1xyXG4gICAgTm9uZTogMCxcclxuICAgIENvbGxpc2lvbkVudGVyOiAxLFxyXG4gICAgQ29sbGlzaW9uU3RheTogMixcclxuICAgIENvbGxpc2lvbkV4aXQ6IDNcclxufSk7XHJcblxyXG5mdW5jdGlvbiBDb250YWN0IChjb2xsaWRlcjEsIGNvbGxpZGVyMikge1xyXG4gICAgdGhpcy5jb2xsaWRlcjEgPSBjb2xsaWRlcjE7XHJcbiAgICB0aGlzLmNvbGxpZGVyMiA9IGNvbGxpZGVyMjtcclxuXHJcbiAgICB0aGlzLnRvdWNoaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdmFyIGlzQ29sbGlkZXIxUG9seWdvbiA9IChjb2xsaWRlcjEgaW5zdGFuY2VvZiBjYy5Cb3hDb2xsaWRlcikgfHwgKGNvbGxpZGVyMSBpbnN0YW5jZW9mIGNjLlBvbHlnb25Db2xsaWRlcik7XHJcbiAgICB2YXIgaXNDb2xsaWRlcjJQb2x5Z29uID0gKGNvbGxpZGVyMiBpbnN0YW5jZW9mIGNjLkJveENvbGxpZGVyKSB8fCAoY29sbGlkZXIyIGluc3RhbmNlb2YgY2MuUG9seWdvbkNvbGxpZGVyKTtcclxuICAgIHZhciBpc0NvbGxpZGVyMUNpcmNsZSA9IGNvbGxpZGVyMSBpbnN0YW5jZW9mIGNjLkNpcmNsZUNvbGxpZGVyO1xyXG4gICAgdmFyIGlzQ29sbGlkZXIyQ2lyY2xlID0gY29sbGlkZXIyIGluc3RhbmNlb2YgY2MuQ2lyY2xlQ29sbGlkZXI7XHJcblxyXG4gICAgaWYgKGlzQ29sbGlkZXIxUG9seWdvbiAmJiBpc0NvbGxpZGVyMlBvbHlnb24pIHtcclxuICAgICAgICB0aGlzLnRlc3RGdW5jID0gSW50ZXJzZWN0aW9uLnBvbHlnb25Qb2x5Z29uO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNDb2xsaWRlcjFDaXJjbGUgJiYgaXNDb2xsaWRlcjJDaXJjbGUpIHtcclxuICAgICAgICB0aGlzLnRlc3RGdW5jID0gSW50ZXJzZWN0aW9uLmNpcmNsZUNpcmNsZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzQ29sbGlkZXIxUG9seWdvbiAmJiBpc0NvbGxpZGVyMkNpcmNsZSkge1xyXG4gICAgICAgIHRoaXMudGVzdEZ1bmMgPSBJbnRlcnNlY3Rpb24ucG9seWdvbkNpcmNsZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzQ29sbGlkZXIxQ2lyY2xlICYmIGlzQ29sbGlkZXIyUG9seWdvbikge1xyXG4gICAgICAgIHRoaXMudGVzdEZ1bmMgPSBJbnRlcnNlY3Rpb24ucG9seWdvbkNpcmNsZTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyMSA9IGNvbGxpZGVyMjtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyMiA9IGNvbGxpZGVyMTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNjLmVycm9ySUQoNjYwMSwgY2MuanMuZ2V0Q2xhc3NOYW1lKGNvbGxpZGVyMSksIGNjLmpzLmdldENsYXNzTmFtZShjb2xsaWRlcjIpKTtcclxuICAgIH1cclxufVxyXG5cclxuQ29udGFjdC5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB3b3JsZDEgPSB0aGlzLmNvbGxpZGVyMS53b3JsZDtcclxuICAgIHZhciB3b3JsZDIgPSB0aGlzLmNvbGxpZGVyMi53b3JsZDtcclxuXHJcbiAgICBpZiAoIXdvcmxkMS5hYWJiLmludGVyc2VjdHMod29ybGQyLmFhYmIpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRlc3RGdW5jID09PSBJbnRlcnNlY3Rpb24ucG9seWdvblBvbHlnb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXN0RnVuYyh3b3JsZDEucG9pbnRzLCB3b3JsZDIucG9pbnRzKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMudGVzdEZ1bmMgPT09IEludGVyc2VjdGlvbi5jaXJjbGVDaXJjbGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXN0RnVuYyh3b3JsZDEsIHdvcmxkMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLnRlc3RGdW5jID09PSBJbnRlcnNlY3Rpb24ucG9seWdvbkNpcmNsZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlc3RGdW5jKHdvcmxkMS5wb2ludHMsIHdvcmxkMik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuQ29udGFjdC5wcm90b3R5cGUudXBkYXRlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy50ZXN0KCk7XHJcblxyXG4gICAgdmFyIHR5cGUgPSBDb2xsaXNpb25UeXBlLk5vbmU7XHJcbiAgICBpZiAocmVzdWx0ICYmICF0aGlzLnRvdWNoaW5nKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaGluZyA9IHRydWU7XHJcbiAgICAgICAgdHlwZSA9IENvbGxpc2lvblR5cGUuQ29sbGlzaW9uRW50ZXI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyZXN1bHQgJiYgdGhpcy50b3VjaGluZykge1xyXG4gICAgICAgIHR5cGUgPSBDb2xsaXNpb25UeXBlLkNvbGxpc2lvblN0YXk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghcmVzdWx0ICYmIHRoaXMudG91Y2hpbmcpIHtcclxuICAgICAgICB0aGlzLnRvdWNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdHlwZSA9IENvbGxpc2lvblR5cGUuQ29sbGlzaW9uRXhpdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHlwZTtcclxufTtcclxuXHJcblxyXG5Db250YWN0LkNvbGxpc2lvblR5cGUgPSBDb2xsaXNpb25UeXBlO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb250YWN0O1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXHJcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXHJcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxyXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xyXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxyXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXHJcblxyXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cclxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgSW50ZXJzZWN0aW9uID0gcmVxdWlyZSgnLi9DQ0ludGVyc2VjdGlvbicpO1xuXG52YXIgQ29sbGlzaW9uVHlwZSA9IGNjLkVudW0oe1xuICAgIE5vbmU6IDAsXG4gICAgQ29sbGlzaW9uRW50ZXI6IDEsXG4gICAgQ29sbGlzaW9uU3RheTogMixcbiAgICBDb2xsaXNpb25FeGl0OiAzXG59KTtcblxuZnVuY3Rpb24gQ29udGFjdChjb2xsaWRlcjEsIGNvbGxpZGVyMikge1xuICAgIHRoaXMuY29sbGlkZXIxID0gY29sbGlkZXIxO1xuICAgIHRoaXMuY29sbGlkZXIyID0gY29sbGlkZXIyO1xuXG4gICAgdGhpcy50b3VjaGluZyA9IGZhbHNlO1xuXG4gICAgdmFyIGlzQ29sbGlkZXIxUG9seWdvbiA9IGNvbGxpZGVyMSBpbnN0YW5jZW9mIGNjLkJveENvbGxpZGVyIHx8IGNvbGxpZGVyMSBpbnN0YW5jZW9mIGNjLlBvbHlnb25Db2xsaWRlcjtcbiAgICB2YXIgaXNDb2xsaWRlcjJQb2x5Z29uID0gY29sbGlkZXIyIGluc3RhbmNlb2YgY2MuQm94Q29sbGlkZXIgfHwgY29sbGlkZXIyIGluc3RhbmNlb2YgY2MuUG9seWdvbkNvbGxpZGVyO1xuICAgIHZhciBpc0NvbGxpZGVyMUNpcmNsZSA9IGNvbGxpZGVyMSBpbnN0YW5jZW9mIGNjLkNpcmNsZUNvbGxpZGVyO1xuICAgIHZhciBpc0NvbGxpZGVyMkNpcmNsZSA9IGNvbGxpZGVyMiBpbnN0YW5jZW9mIGNjLkNpcmNsZUNvbGxpZGVyO1xuXG4gICAgaWYgKGlzQ29sbGlkZXIxUG9seWdvbiAmJiBpc0NvbGxpZGVyMlBvbHlnb24pIHtcbiAgICAgICAgdGhpcy50ZXN0RnVuYyA9IEludGVyc2VjdGlvbi5wb2x5Z29uUG9seWdvbjtcbiAgICB9IGVsc2UgaWYgKGlzQ29sbGlkZXIxQ2lyY2xlICYmIGlzQ29sbGlkZXIyQ2lyY2xlKSB7XG4gICAgICAgIHRoaXMudGVzdEZ1bmMgPSBJbnRlcnNlY3Rpb24uY2lyY2xlQ2lyY2xlO1xuICAgIH0gZWxzZSBpZiAoaXNDb2xsaWRlcjFQb2x5Z29uICYmIGlzQ29sbGlkZXIyQ2lyY2xlKSB7XG4gICAgICAgIHRoaXMudGVzdEZ1bmMgPSBJbnRlcnNlY3Rpb24ucG9seWdvbkNpcmNsZTtcbiAgICB9IGVsc2UgaWYgKGlzQ29sbGlkZXIxQ2lyY2xlICYmIGlzQ29sbGlkZXIyUG9seWdvbikge1xuICAgICAgICB0aGlzLnRlc3RGdW5jID0gSW50ZXJzZWN0aW9uLnBvbHlnb25DaXJjbGU7XG4gICAgICAgIHRoaXMuY29sbGlkZXIxID0gY29sbGlkZXIyO1xuICAgICAgICB0aGlzLmNvbGxpZGVyMiA9IGNvbGxpZGVyMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYy5lcnJvcklEKDY2MDEsIGNjLmpzLmdldENsYXNzTmFtZShjb2xsaWRlcjEpLCBjYy5qcy5nZXRDbGFzc05hbWUoY29sbGlkZXIyKSk7XG4gICAgfVxufVxuXG5Db250YWN0LnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB3b3JsZDEgPSB0aGlzLmNvbGxpZGVyMS53b3JsZDtcbiAgICB2YXIgd29ybGQyID0gdGhpcy5jb2xsaWRlcjIud29ybGQ7XG5cbiAgICBpZiAoIXdvcmxkMS5hYWJiLmludGVyc2VjdHMod29ybGQyLmFhYmIpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50ZXN0RnVuYyA9PT0gSW50ZXJzZWN0aW9uLnBvbHlnb25Qb2x5Z29uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlc3RGdW5jKHdvcmxkMS5wb2ludHMsIHdvcmxkMi5wb2ludHMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXN0RnVuYyA9PT0gSW50ZXJzZWN0aW9uLmNpcmNsZUNpcmNsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXN0RnVuYyh3b3JsZDEsIHdvcmxkMik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlc3RGdW5jID09PSBJbnRlcnNlY3Rpb24ucG9seWdvbkNpcmNsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXN0RnVuYyh3b3JsZDEucG9pbnRzLCB3b3JsZDIpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbkNvbnRhY3QucHJvdG90eXBlLnVwZGF0ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLnRlc3QoKTtcblxuICAgIHZhciB0eXBlID0gQ29sbGlzaW9uVHlwZS5Ob25lO1xuICAgIGlmIChyZXN1bHQgJiYgIXRoaXMudG91Y2hpbmcpIHtcbiAgICAgICAgdGhpcy50b3VjaGluZyA9IHRydWU7XG4gICAgICAgIHR5cGUgPSBDb2xsaXNpb25UeXBlLkNvbGxpc2lvbkVudGVyO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ICYmIHRoaXMudG91Y2hpbmcpIHtcbiAgICAgICAgdHlwZSA9IENvbGxpc2lvblR5cGUuQ29sbGlzaW9uU3RheTtcbiAgICB9IGVsc2UgaWYgKCFyZXN1bHQgJiYgdGhpcy50b3VjaGluZykge1xuICAgICAgICB0aGlzLnRvdWNoaW5nID0gZmFsc2U7XG4gICAgICAgIHR5cGUgPSBDb2xsaXNpb25UeXBlLkNvbGxpc2lvbkV4aXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG59O1xuXG5Db250YWN0LkNvbGxpc2lvblR5cGUgPSBDb2xsaXNpb25UeXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRhY3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa05EUTI5dWRHRmpkQzVxY3lKZExDSnVZVzFsY3lJNld5SkpiblJsY25ObFkzUnBiMjRpTENKeVpYRjFhWEpsSWl3aVEyOXNiR2x6YVc5dVZIbHdaU0lzSW1Oaklpd2lSVzUxYlNJc0lrNXZibVVpTENKRGIyeHNhWE5wYjI1RmJuUmxjaUlzSWtOdmJHeHBjMmx2YmxOMFlYa2lMQ0pEYjJ4c2FYTnBiMjVGZUdsMElpd2lRMjl1ZEdGamRDSXNJbU52Ykd4cFpHVnlNU0lzSW1OdmJHeHBaR1Z5TWlJc0luUnZkV05vYVc1bklpd2lhWE5EYjJ4c2FXUmxjakZRYjJ4NVoyOXVJaXdpUW05NFEyOXNiR2xrWlhJaUxDSlFiMng1WjI5dVEyOXNiR2xrWlhJaUxDSnBjME52Ykd4cFpHVnlNbEJ2YkhsbmIyNGlMQ0pwYzBOdmJHeHBaR1Z5TVVOcGNtTnNaU0lzSWtOcGNtTnNaVU52Ykd4cFpHVnlJaXdpYVhORGIyeHNhV1JsY2pKRGFYSmpiR1VpTENKMFpYTjBSblZ1WXlJc0luQnZiSGxuYjI1UWIyeDVaMjl1SWl3aVkybHlZMnhsUTJseVkyeGxJaXdpY0c5c2VXZHZia05wY21Oc1pTSXNJbVZ5Y205eVNVUWlMQ0pxY3lJc0ltZGxkRU5zWVhOelRtRnRaU0lzSW5CeWIzUnZkSGx3WlNJc0luUmxjM1FpTENKM2IzSnNaREVpTENKM2IzSnNaQ0lzSW5kdmNteGtNaUlzSW1GaFltSWlMQ0pwYm5SbGNuTmxZM1J6SWl3aWNHOXBiblJ6SWl3aWRYQmtZWFJsVTNSaGRHVWlMQ0p5WlhOMWJIUWlMQ0owZVhCbElpd2liVzlrZFd4bElpd2laWGh3YjNKMGN5SmRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVEJDUVN4SlFVRkpRU3hsUVVGbFF5eFJRVUZSTEd0Q1FVRlNMRU5CUVc1Q096dEJRVVZCTEVsQlFVbERMR2RDUVVGblFrTXNSMEZCUjBNc1NVRkJTQ3hEUVVGUk8wRkJRM2hDUXl4VlFVRk5MRU5CUkd0Q08wRkJSWGhDUXl4dlFrRkJaMElzUTBGR1VUdEJRVWQ0UWtNc2JVSkJRV1VzUTBGSVV6dEJRVWw0UWtNc2JVSkJRV1U3UVVGS1V5eERRVUZTTEVOQlFYQkNPenRCUVU5QkxGTkJRVk5ETEU5QlFWUXNRMEZCYTBKRExGTkJRV3hDTEVWQlFUWkNReXhUUVVFM1FpeEZRVUYzUXp0QlFVTndReXhUUVVGTFJDeFRRVUZNTEVkQlFXbENRU3hUUVVGcVFqdEJRVU5CTEZOQlFVdERMRk5CUVV3c1IwRkJhVUpCTEZOQlFXcENPenRCUVVWQkxGTkJRVXRETEZGQlFVd3NSMEZCWjBJc1MwRkJhRUk3TzBGQlJVRXNVVUZCU1VNc2NVSkJRWE5DU0N4eFFrRkJjVUpRTEVkQlFVZFhMRmRCUVhwQ0xFbEJRVEJEU2l4eFFrRkJjVUpRTEVkQlFVZFpMR1ZCUVROR08wRkJRMEVzVVVGQlNVTXNjVUpCUVhOQ1RDeHhRa0ZCY1VKU0xFZEJRVWRYTEZkQlFYcENMRWxCUVRCRFNDeHhRa0ZCY1VKU0xFZEJRVWRaTEdWQlFUTkdPMEZCUTBFc1VVRkJTVVVzYjBKQlFXOUNVQ3h4UWtGQmNVSlFMRWRCUVVkbExHTkJRV2hFTzBGQlEwRXNVVUZCU1VNc2IwSkJRVzlDVWl4eFFrRkJjVUpTTEVkQlFVZGxMR05CUVdoRU96dEJRVVZCTEZGQlFVbE1MSE5DUVVGelFrY3NhMEpCUVRGQ0xFVkJRVGhETzBGQlF6RkRMR0ZCUVV0SkxGRkJRVXdzUjBGQlowSndRaXhoUVVGaGNVSXNZMEZCTjBJN1FVRkRTQ3hMUVVaRUxFMUJSMHNzU1VGQlNVb3NjVUpCUVhGQ1JTeHBRa0ZCZWtJc1JVRkJORU03UVVGRE4wTXNZVUZCUzBNc1VVRkJUQ3hIUVVGblFuQkNMR0ZCUVdGelFpeFpRVUUzUWp0QlFVTklMRXRCUmtrc1RVRkhRU3hKUVVGSlZDeHpRa0ZCYzBKTkxHbENRVUV4UWl4RlFVRTJRenRCUVVNNVF5eGhRVUZMUXl4UlFVRk1MRWRCUVdkQ2NFSXNZVUZCWVhWQ0xHRkJRVGRDTzBGQlEwZ3NTMEZHU1N4TlFVZEJMRWxCUVVsT0xIRkNRVUZ4UWtRc2EwSkJRWHBDTEVWQlFUWkRPMEZCUXpsRExHRkJRVXRKTEZGQlFVd3NSMEZCWjBKd1FpeGhRVUZoZFVJc1lVRkJOMEk3UVVGRFFTeGhRVUZMWWl4VFFVRk1MRWRCUVdsQ1F5eFRRVUZxUWp0QlFVTkJMR0ZCUVV0QkxGTkJRVXdzUjBGQmFVSkVMRk5CUVdwQ08wRkJRMGdzUzBGS1NTeE5RVXRCTzBGQlEwUlFMRmRCUVVkeFFpeFBRVUZJTEVOQlFWY3NTVUZCV0N4RlFVRnBRbkpDTEVkQlFVZHpRaXhGUVVGSUxFTkJRVTFETEZsQlFVNHNRMEZCYlVKb1FpeFRRVUZ1UWl4RFFVRnFRaXhGUVVGblJGQXNSMEZCUjNOQ0xFVkJRVWdzUTBGQlRVTXNXVUZCVGl4RFFVRnRRbVlzVTBGQmJrSXNRMEZCYUVRN1FVRkRTRHRCUVVOS096dEJRVVZFUml4UlFVRlJhMElzVTBGQlVpeERRVUZyUWtNc1NVRkJiRUlzUjBGQmVVSXNXVUZCV1R0QlFVTnFReXhSUVVGSlF5eFRRVUZUTEV0QlFVdHVRaXhUUVVGTUxFTkJRV1Z2UWl4TFFVRTFRanRCUVVOQkxGRkJRVWxETEZOQlFWTXNTMEZCUzNCQ0xGTkJRVXdzUTBGQlpXMUNMRXRCUVRWQ096dEJRVVZCTEZGQlFVa3NRMEZCUTBRc1QwRkJUMGNzU1VGQlVDeERRVUZaUXl4VlFVRmFMRU5CUVhWQ1JpeFBRVUZQUXl4SlFVRTVRaXhEUVVGTUxFVkJRVEJETzBGQlEzUkRMR1ZCUVU4c1MwRkJVRHRCUVVOSU96dEJRVVZFTEZGQlFVa3NTMEZCUzFvc1VVRkJUQ3hMUVVGclFuQkNMR0ZCUVdGeFFpeGpRVUZ1UXl4RlFVRnRSRHRCUVVNdlF5eGxRVUZQTEV0QlFVdEVMRkZCUVV3c1EwRkJZMU1zVDBGQlQwc3NUVUZCY2tJc1JVRkJOa0pJTEU5QlFVOUhMRTFCUVhCRExFTkJRVkE3UVVGRFNDeExRVVpFTEUxQlIwc3NTVUZCU1N4TFFVRkxaQ3hSUVVGTUxFdEJRV3RDY0VJc1lVRkJZWE5DTEZsQlFXNURMRVZCUVdsRU8wRkJRMnhFTEdWQlFVOHNTMEZCUzBZc1VVRkJUQ3hEUVVGalV5eE5RVUZrTEVWQlFYTkNSU3hOUVVGMFFpeERRVUZRTzBGQlEwZ3NTMEZHU1N4TlFVZEJMRWxCUVVrc1MwRkJTMWdzVVVGQlRDeExRVUZyUW5CQ0xHRkJRV0YxUWl4aFFVRnVReXhGUVVGclJEdEJRVU51UkN4bFFVRlBMRXRCUVV0SUxGRkJRVXdzUTBGQlkxTXNUMEZCVDBzc1RVRkJja0lzUlVGQk5rSklMRTFCUVRkQ0xFTkJRVkE3UVVGRFNEczdRVUZGUkN4WFFVRlBMRXRCUVZBN1FVRkRTQ3hEUVc1Q1JEczdRVUZ4UWtGMFFpeFJRVUZSYTBJc1UwRkJVaXhEUVVGclFsRXNWMEZCYkVJc1IwRkJaME1zV1VGQldUdEJRVU40UXl4UlFVRkpReXhUUVVGVExFdEJRVXRTTEVsQlFVd3NSVUZCWWpzN1FVRkZRU3hSUVVGSlV5eFBRVUZQYmtNc1kwRkJZMGNzU1VGQmVrSTdRVUZEUVN4UlFVRkpLMElzVlVGQlZTeERRVUZETEV0QlFVdDRRaXhSUVVGd1FpeEZRVUU0UWp0QlFVTXhRaXhoUVVGTFFTeFJRVUZNTEVkQlFXZENMRWxCUVdoQ08wRkJRMEY1UWl4bFFVRlBia01zWTBGQlkwa3NZMEZCY2tJN1FVRkRTQ3hMUVVoRUxFMUJTVXNzU1VGQlNUaENMRlZCUVZVc1MwRkJTM2hDTEZGQlFXNUNMRVZCUVRaQ08wRkJRemxDZVVJc1pVRkJUMjVETEdOQlFXTkxMR0ZCUVhKQ08wRkJRMGdzUzBGR1NTeE5RVWRCTEVsQlFVa3NRMEZCUXpaQ0xFMUJRVVFzU1VGQlZ5eExRVUZMZUVJc1VVRkJjRUlzUlVGQk9FSTdRVUZETDBJc1lVRkJTMEVzVVVGQlRDeEhRVUZuUWl4TFFVRm9RanRCUVVOQmVVSXNaVUZCVDI1RExHTkJRV05OTEdGQlFYSkNPMEZCUTBnN08wRkJSVVFzVjBGQlR6WkNMRWxCUVZBN1FVRkRTQ3hEUVdwQ1JEczdRVUZ2UWtFMVFpeFJRVUZSVUN4aFFVRlNMRWRCUVhkQ1FTeGhRVUY0UWpzN1FVRkZRVzlETEU5QlFVOURMRTlCUVZBc1IwRkJhVUk1UWl4UFFVRnFRaUlzSW1acGJHVWlPaUpEUTBOdmJuUmhZM1F1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4eVhHNGdRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERTNMVEl3TVRnZ1dHbGhiV1Z1SUZsaGFta2dVMjltZEhkaGNtVWdRMjh1TENCTWRHUXVYSEpjYmx4eVhHNGdhSFIwY0hNNkx5OTNkM2N1WTI5amIzTXVZMjl0TDF4eVhHNWNjbHh1SUZCbGNtMXBjM05wYjI0Z2FYTWdhR1Z5WldKNUlHZHlZVzUwWldRc0lHWnlaV1VnYjJZZ1kyaGhjbWRsTENCMGJ5QmhibmtnY0dWeWMyOXVJRzlpZEdGcGJtbHVaeUJoSUdOdmNIbGNjbHh1SUc5bUlIUm9hWE1nYzI5bWRIZGhjbVVnWVc1a0lHRnpjMjlqYVdGMFpXUWdaVzVuYVc1bElITnZkWEpqWlNCamIyUmxJQ2gwYUdVZ1hDSlRiMlowZDJGeVpWd2lLU3dnWVNCc2FXMXBkR1ZrTEZ4eVhHNGdkMjl5YkdSM2FXUmxMQ0J5YjNsaGJIUjVMV1p5WldVc0lHNXZiaTFoYzNOcFoyNWhZbXhsTENCeVpYWnZZMkZpYkdVZ1lXNWtJRzV2YmkxbGVHTnNkWE5wZG1VZ2JHbGpaVzV6WlZ4eVhHNGdkRzhnZFhObElFTnZZMjl6SUVOeVpXRjBiM0lnYzI5c1pXeDVJSFJ2SUdSbGRtVnNiM0FnWjJGdFpYTWdiMjRnZVc5MWNpQjBZWEpuWlhRZ2NHeGhkR1p2Y20xekxpQlpiM1VnYzJoaGJHeGNjbHh1SUc1dmRDQjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMlowZDJGeVpTQm1iM0lnWkdWMlpXeHZjR2x1WnlCdmRHaGxjaUJ6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUIwYUdGMEozTmNjbHh1SUhWelpXUWdabTl5SUdSbGRtVnNiM0JwYm1jZ1oyRnRaWE11SUZsdmRTQmhjbVVnYm05MElHZHlZVzUwWldRZ2RHOGdjSFZpYkdsemFDd2daR2x6ZEhKcFluVjBaU3hjY2x4dUlITjFZbXhwWTJWdWMyVXNJR0Z1WkM5dmNpQnpaV3hzSUdOdmNHbGxjeUJ2WmlCRGIyTnZjeUJEY21WaGRHOXlMbHh5WEc1Y2NseHVJRlJvWlNCemIyWjBkMkZ5WlNCdmNpQjBiMjlzY3lCcGJpQjBhR2x6SUV4cFkyVnVjMlVnUVdkeVpXVnRaVzUwSUdGeVpTQnNhV05sYm5ObFpDd2dibTkwSUhOdmJHUXVYSEpjYmlCWWFXRnRaVzRnV1dGcWFTQlRiMlowZDJGeVpTQkRieTRzSUV4MFpDNGdjbVZ6WlhKMlpYTWdZV3hzSUhKcFoyaDBjeUJ1YjNRZ1pYaHdjbVZ6YzJ4NUlHZHlZVzUwWldRZ2RHOGdlVzkxTGx4eVhHNWNjbHh1SUZSSVJTQlRUMFpVVjBGU1JTQkpVeUJRVWs5V1NVUkZSQ0JjSWtGVElFbFRYQ0lzSUZkSlZFaFBWVlFnVjBGU1VrRk9WRmtnVDBZZ1FVNVpJRXRKVGtRc0lFVllVRkpGVTFNZ1QxSmNjbHh1SUVsTlVFeEpSVVFzSUVsT1EweFZSRWxPUnlCQ1ZWUWdUazlVSUV4SlRVbFVSVVFnVkU4Z1ZFaEZJRmRCVWxKQlRsUkpSVk1nVDBZZ1RVVlNRMGhCVGxSQlFrbE1TVlJaTEZ4eVhHNGdSa2xVVGtWVFV5QkdUMUlnUVNCUVFWSlVTVU5WVEVGU0lGQlZVbEJQVTBVZ1FVNUVJRTVQVGtsT1JsSkpUa2RGVFVWT1ZDNGdTVTRnVGs4Z1JWWkZUbFFnVTBoQlRFd2dWRWhGWEhKY2JpQkJWVlJJVDFKVElFOVNJRU5QVUZsU1NVZElWQ0JJVDB4RVJWSlRJRUpGSUV4SlFVSk1SU0JHVDFJZ1FVNVpJRU5NUVVsTkxDQkVRVTFCUjBWVElFOVNJRTlVU0VWU1hISmNiaUJNU1VGQ1NVeEpWRmtzSUZkSVJWUklSVklnU1U0Z1FVNGdRVU5VU1U5T0lFOUdJRU5QVGxSU1FVTlVMQ0JVVDFKVUlFOVNJRTlVU0VWU1YwbFRSU3dnUVZKSlUwbE9SeUJHVWs5TkxGeHlYRzRnVDFWVUlFOUdJRTlTSUVsT0lFTlBUazVGUTFSSlQwNGdWMGxVU0NCVVNFVWdVMDlHVkZkQlVrVWdUMUlnVkVoRklGVlRSU0JQVWlCUFZFaEZVaUJFUlVGTVNVNUhVeUJKVGx4eVhHNGdWRWhGSUZOUFJsUlhRVkpGTGx4eVhHNGdLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2k5Y2NseHVYSEpjYmx4eVhHNTJZWElnU1c1MFpYSnpaV04wYVc5dUlEMGdjbVZ4ZFdseVpTZ25MaTlEUTBsdWRHVnljMlZqZEdsdmJpY3BPMXh5WEc1Y2NseHVkbUZ5SUVOdmJHeHBjMmx2YmxSNWNHVWdQU0JqWXk1RmJuVnRLSHRjY2x4dUlDQWdJRTV2Ym1VNklEQXNYSEpjYmlBZ0lDQkRiMnhzYVhOcGIyNUZiblJsY2pvZ01TeGNjbHh1SUNBZ0lFTnZiR3hwYzJsdmJsTjBZWGs2SURJc1hISmNiaUFnSUNCRGIyeHNhWE5wYjI1RmVHbDBPaUF6WEhKY2JuMHBPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdRMjl1ZEdGamRDQW9ZMjlzYkdsa1pYSXhMQ0JqYjJ4c2FXUmxjaklwSUh0Y2NseHVJQ0FnSUhSb2FYTXVZMjlzYkdsa1pYSXhJRDBnWTI5c2JHbGtaWEl4TzF4eVhHNGdJQ0FnZEdocGN5NWpiMnhzYVdSbGNqSWdQU0JqYjJ4c2FXUmxjakk3WEhKY2JseHlYRzRnSUNBZ2RHaHBjeTUwYjNWamFHbHVaeUE5SUdaaGJITmxPMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQnBjME52Ykd4cFpHVnlNVkJ2YkhsbmIyNGdQU0FvWTI5c2JHbGtaWEl4SUdsdWMzUmhibU5sYjJZZ1kyTXVRbTk0UTI5c2JHbGtaWElwSUh4OElDaGpiMnhzYVdSbGNqRWdhVzV6ZEdGdVkyVnZaaUJqWXk1UWIyeDVaMjl1UTI5c2JHbGtaWElwTzF4eVhHNGdJQ0FnZG1GeUlHbHpRMjlzYkdsa1pYSXlVRzlzZVdkdmJpQTlJQ2hqYjJ4c2FXUmxjaklnYVc1emRHRnVZMlZ2WmlCall5NUNiM2hEYjJ4c2FXUmxjaWtnZkh3Z0tHTnZiR3hwWkdWeU1pQnBibk4wWVc1alpXOW1JR05qTGxCdmJIbG5iMjVEYjJ4c2FXUmxjaWs3WEhKY2JpQWdJQ0IyWVhJZ2FYTkRiMnhzYVdSbGNqRkRhWEpqYkdVZ1BTQmpiMnhzYVdSbGNqRWdhVzV6ZEdGdVkyVnZaaUJqWXk1RGFYSmpiR1ZEYjJ4c2FXUmxjanRjY2x4dUlDQWdJSFpoY2lCcGMwTnZiR3hwWkdWeU1rTnBjbU5zWlNBOUlHTnZiR3hwWkdWeU1pQnBibk4wWVc1alpXOW1JR05qTGtOcGNtTnNaVU52Ykd4cFpHVnlPMXh5WEc1Y2NseHVJQ0FnSUdsbUlDaHBjME52Ykd4cFpHVnlNVkJ2YkhsbmIyNGdKaVlnYVhORGIyeHNhV1JsY2pKUWIyeDVaMjl1S1NCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1MFpYTjBSblZ1WXlBOUlFbHVkR1Z5YzJWamRHbHZiaTV3YjJ4NVoyOXVVRzlzZVdkdmJqdGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lHVnNjMlVnYVdZZ0tHbHpRMjlzYkdsa1pYSXhRMmx5WTJ4bElDWW1JR2x6UTI5c2JHbGtaWEl5UTJseVkyeGxLU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTUwWlhOMFJuVnVZeUE5SUVsdWRHVnljMlZqZEdsdmJpNWphWEpqYkdWRGFYSmpiR1U3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JsYkhObElHbG1JQ2hwYzBOdmJHeHBaR1Z5TVZCdmJIbG5iMjRnSmlZZ2FYTkRiMnhzYVdSbGNqSkRhWEpqYkdVcElIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuUmxjM1JHZFc1aklEMGdTVzUwWlhKelpXTjBhVzl1TG5CdmJIbG5iMjVEYVhKamJHVTdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQmxiSE5sSUdsbUlDaHBjME52Ykd4cFpHVnlNVU5wY21Oc1pTQW1KaUJwYzBOdmJHeHBaR1Z5TWxCdmJIbG5iMjRwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5SbGMzUkdkVzVqSUQwZ1NXNTBaWEp6WldOMGFXOXVMbkJ2YkhsbmIyNURhWEpqYkdVN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1amIyeHNhV1JsY2pFZ1BTQmpiMnhzYVdSbGNqSTdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWpiMnhzYVdSbGNqSWdQU0JqYjJ4c2FXUmxjakU3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0JqWXk1bGNuSnZja2xFS0RZMk1ERXNJR05qTG1wekxtZGxkRU5zWVhOelRtRnRaU2hqYjJ4c2FXUmxjakVwTENCall5NXFjeTVuWlhSRGJHRnpjMDVoYldVb1kyOXNiR2xrWlhJeUtTazdYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYmtOdmJuUmhZM1F1Y0hKdmRHOTBlWEJsTG5SbGMzUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNCMllYSWdkMjl5YkdReElEMGdkR2hwY3k1amIyeHNhV1JsY2pFdWQyOXliR1E3WEhKY2JpQWdJQ0IyWVhJZ2QyOXliR1F5SUQwZ2RHaHBjeTVqYjJ4c2FXUmxjakl1ZDI5eWJHUTdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDRjNiM0pzWkRFdVlXRmlZaTVwYm5SbGNuTmxZM1J6S0hkdmNteGtNaTVoWVdKaUtTa2dlMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JwWmlBb2RHaHBjeTUwWlhOMFJuVnVZeUE5UFQwZ1NXNTBaWEp6WldOMGFXOXVMbkJ2YkhsbmIyNVFiMng1WjI5dUtTQjdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWRHVnpkRVoxYm1Nb2QyOXliR1F4TG5CdmFXNTBjeXdnZDI5eWJHUXlMbkJ2YVc1MGN5azdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQmxiSE5sSUdsbUlDaDBhR2x6TG5SbGMzUkdkVzVqSUQwOVBTQkpiblJsY25ObFkzUnBiMjR1WTJseVkyeGxRMmx5WTJ4bEtTQjdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWRHVnpkRVoxYm1Nb2QyOXliR1F4TENCM2IzSnNaRElwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnWld4elpTQnBaaUFvZEdocGN5NTBaWE4wUm5WdVl5QTlQVDBnU1c1MFpYSnpaV04wYVc5dUxuQnZiSGxuYjI1RGFYSmpiR1VwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTUwWlhOMFJuVnVZeWgzYjNKc1pERXVjRzlwYm5SekxDQjNiM0pzWkRJcE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2NseHVmVHRjY2x4dVhISmNia052Ym5SaFkzUXVjSEp2ZEc5MGVYQmxMblZ3WkdGMFpWTjBZWFJsSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdkbUZ5SUhKbGMzVnNkQ0E5SUhSb2FYTXVkR1Z6ZENncE8xeHlYRzVjY2x4dUlDQWdJSFpoY2lCMGVYQmxJRDBnUTI5c2JHbHphVzl1Vkhsd1pTNU9iMjVsTzF4eVhHNGdJQ0FnYVdZZ0tISmxjM1ZzZENBbUppQWhkR2hwY3k1MGIzVmphR2x1WnlrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWRHOTFZMmhwYm1jZ1BTQjBjblZsTzF4eVhHNGdJQ0FnSUNBZ0lIUjVjR1VnUFNCRGIyeHNhWE5wYjI1VWVYQmxMa052Ykd4cGMybHZia1Z1ZEdWeU8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ1pXeHpaU0JwWmlBb2NtVnpkV3gwSUNZbUlIUm9hWE11ZEc5MVkyaHBibWNwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBlWEJsSUQwZ1EyOXNiR2x6YVc5dVZIbHdaUzVEYjJ4c2FYTnBiMjVUZEdGNU8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ1pXeHpaU0JwWmlBb0lYSmxjM1ZzZENBbUppQjBhR2x6TG5SdmRXTm9hVzVuS1NCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1MGIzVmphR2x1WnlBOUlHWmhiSE5sTzF4eVhHNGdJQ0FnSUNBZ0lIUjVjR1VnUFNCRGIyeHNhWE5wYjI1VWVYQmxMa052Ykd4cGMybHZia1Y0YVhRN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjbVYwZFhKdUlIUjVjR1U3WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1UTI5dWRHRmpkQzVEYjJ4c2FYTnBiMjVVZVhCbElEMGdRMjlzYkdsemFXOXVWSGx3WlR0Y2NseHVYSEpjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnUTI5dWRHRmpkRHRjY2x4dUlsMTkiXX0=