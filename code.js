function quicksort(x) {
    qsort(x, 0, x.length - 1);
    return x;
}
function pivot (x, lo, hi) {



    let pi = x[hi];

    let i = lo - 1;

    for (let j = lo; j <= hi - 1; j++) {
        if (x[j] < pi) {

            i++;
            swap(x, i, j);
        }
    }

    swap(x, i + 1, hi);

    return i + 1;
}
function swap(x, a ,b )
{
    let temp = x[a];
    x[a] = x[b];
    x[b] = temp;
}
function qsort(x, lo, hi) {
    let place = new Array(hi - lo + 1);
    place.fill(0);

    let spot = -1;

    place[++spot] = lo;
    place[++spot] = hi;


    while (spot >= 0) {
        
        hi = place[spot--];
        lo = place[spot--];

        let pi = pivot(x, lo, hi);
        if (pi-1 > lo) {

            place[++spot] = lo;
            place[++spot] = pi - 1;
        }
        if (pi+1 < hi) {

            place[++spot] = pi + 1;
            place[++spot] = hi;
        }
    }
}
