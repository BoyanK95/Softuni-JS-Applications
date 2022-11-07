async function getInfo() {
  const stopIdInbput = document.getElementById("stopId");
  const busesRootEl = document.getElementById("buses");
  const stopNameEl = document.getElementById("stopName");
  const id = stopIdInbput.value;
  const url = `http://localhost:3030/jsonstore/bus/businfo/${id}`;

  busesRootEl.innerHTML = ''
  stopIdInbput.value = ''
  try {
    const responce = await fetch(url);
    const data = await responce.json();

    stopNameEl.textContent = data.name;

    Object.entries(data.buses).forEach(([busNum, timeArrivel]) => {
      const li = document.createElement("li");
      li.textContent = `Bus ${busNum} arrives in ${timeArrivel} minutes`;
      busesRootEl.appendChild(li);
    });
  } catch (err) {
    stopNameEl.textContent = "Error";
  }
}
