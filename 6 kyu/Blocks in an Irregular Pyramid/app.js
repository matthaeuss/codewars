function numBlocks(w, l, h) {
    h=h-1n
    return ((h * (h + 1n) * ((2n * h) + 1n))/6n) + (((w+l) * h *(h+1n))/2n + w * l * h) + w * l
  }

numBlocks(1, 1, 2)