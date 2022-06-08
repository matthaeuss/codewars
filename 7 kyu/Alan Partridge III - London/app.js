function alan(x) {
    const dict = [
      "Rejection",
      "Disappointment",
      "Backstabbing Central",
      "Shattered Dreams Parkway"
    ];
    return dict.every(v => x.includes(v))
      ? "Smell my cheese you mother!"
      : "No, seriously, run. You will miss it.";
  }

  