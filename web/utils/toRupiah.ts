/**
 * JavaScript Code Snippet
 * Convert Number to Rupiah & vice versa
 * https://gist.github.com/845309
 *
 * Copyright 2011-2012, Faisalman
 * Licensed under The MIT License
 * http://www.opensource.org/licenses/mit-license
 *
 */

export const toRupiah = (angka: number): string => {
    var rupiah = "";
    var angkarev = angka.toString().split("").reverse().join("");
    for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
    return (
        "Rp. " +
        rupiah
            .split("", rupiah.length - 1)
            .reverse()
            .join("")
    );
};
