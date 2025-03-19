# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Running time is proportional to number of comparisons.
1. Pick a pivot.
Zero comparisons
2. Reorder (partition) array around the pivot.
Quicksort compares each element to the pivot.
 n - 1 comparisons
3. iterative sort each partition.
Depends on the size of the partitions.
n − 1 comparisons for worst-case runtime

so &(n - 1) * ( n- 1) = n^2 -2n +1$ Because one is inside the while loop of the other

so O ($n^2) 





For this assignment, I used the resources of http://stackoverflow.com/questions/12553238/quicksort-iterative-or-recursive, https://www.geeksforgeeks.org/quick-sort-algorithm/, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill, https://www.geeksforgeeks.org/how-to-swap-two-variables-in-javascript/
"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
