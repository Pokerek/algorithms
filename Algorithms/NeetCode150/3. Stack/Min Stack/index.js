const MinStack = function () {
   this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
   if (this.stack.length === 0) {
      this.stack.min = val;
   } else {
      this.stack.min = Math.min(this.stack.min, val);
   }
   this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
   if (this.stack.length > 0) {
      this.stack.pop();
      this.stack.min = Math.min(...this.stack);
   }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
   if (this.stack.length > 0) {
      return this.stack.at(-1);
   }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
   return this.stack.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
