const rules: {
  [url: string]: () => void;
} = {
  'https://news.detik.com/': filterDetikAdds,
};

function filterDetikAdds() {
  const megaBillboard = document.getElementById('megabillboard-desktop');


  //   const child = document.getElementsByClassName('parallax_abs');

  //   megaBillboard.removeChild(child[0]);

  megaBillboard.style.display = 'none';
}

if (document.URL in rules) {
  rules[document.URL]();
}
