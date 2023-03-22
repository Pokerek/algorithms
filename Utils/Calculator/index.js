export function add(...args) {
   if (args.some(el => isNaN(el))) throw Error('Arguments must be a number.');

   return args.reduce((total, number) => total + Number(number), 0);
}