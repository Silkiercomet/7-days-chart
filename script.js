const bars = Array.from(document.querySelectorAll(".chart__bar"))

const getData = async () => {
    const data = await fetch("./data.json")
    let response = data.json()
    return response
}

const addCharts = async () => {
    const data = await getData()

    data.forEach((element,i) => {
        const bar = document.createElement('div');
        const amount = document.createElement('div');
        amount.classList.add("amount");
        bar.classList.add('chart-bar');
        amount.textContent = `$${element.amount}`
        const barHeight = (element.amount / 100) * 200; // Calculate height based on data value and container height
        bar.style.height = `${barHeight}px`;
        bar.appendChild(amount)
        bars[i].prepend(bar);
    });
}
addCharts()