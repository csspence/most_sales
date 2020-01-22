/*
You work in the best consumer electronics corporation, and your boss wants to find out which three products 
generate the most revenue. Given 3 lists of the same length like these:

products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
return the three product names with the highest revenue (amount * price).

Note: if multiple products have the same revenue, order them according to their original positions in the input list.
*/

const top3 = (products, amounts, prices) => {
  const all = products.map((_, i) => {
    return {
      name: products[i],
      val: amounts[i] * prices[i],
      idx: i
    };
  });
  
  all.sort((a, b) => {
    const d = b.val - a.val;
    if (d === 0) return a.idx - b.idx;
    return d;
  });
  
  return all.slice(0, 3).map(o => o.name);
}