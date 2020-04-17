let inputs = document.querySelectorAll('.param input');

function varCss() {
    const unit = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + unit);
    console.log(unit)
}
inputs.forEach(input => input.addEventListener('change', varCss));
inputs.forEach(input => input.addEventListener('mousemove', varCss));