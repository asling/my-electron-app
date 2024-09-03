const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

const extra = document.getElementById('extra');

console.log("window.versions.ping", window.versions.ping);

window.versions.ping().then(res => {

  extra.innerText = JSON.stringify(res);
}).catch(err => console.log(err))

