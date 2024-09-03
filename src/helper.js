export const mergeArtist = (artists) => {
  if (artists.length > 1) {
    var showArtiste = "";
    for (i = 0; i < artists.length; i++) {
      showArtiste += artists[i].name + ", ";
    }
    let merged = showArtiste.slice(0, showArtiste.length);
    return merged;
  } else {
    return artists[0].name;
  }
};
