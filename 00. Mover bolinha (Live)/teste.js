const velocidade = 50;

let props = {
  left: 200,
  top: 200,
};

// havia trocado onkeydown por onkeypress (que é outro evento) :)
document.onkeydown = function (ev) {
  if (ev.key == 'ArrowDown') props.top += velocidade;
  if (ev.key == 'ArrowUp') props.top -= velocidade;
  if (ev.key == 'ArrowLeft') props.left -= velocidade;
  if (ev.key == 'ArrowRight') props.left += velocidade;
}

function desenhar() {
  bolinha.style.left = props.left + 'px';
  bolinha.style.top = props.top + 'px';
}

// havia trocado setInterval por setTimeout (que tem outra função) :)
setInterval(desenhar, 60);
