function add_tr(text, id = 'aishell2') {
  // 给定的字符串，使用制表符分隔文本和音频路径
  // var text = "你会很高兴地知道我们立即给予了帮助\taudios/aishell2/IT0016W0138_prompt.wav\t健康的身体是实现梦想和幸福生活的基石\taudios/aishell2/IT0016W0138.wav";

  // 使用制表符分割字符串为相应的部分
  var parts = text.split("\t");

  // 提取拆分后的部分
  var promptText = parts[0];
  var promptAudioPath = parts[1];
  var audioText = parts[2];
  var audioPath = parts[3];

  // 创建要添加的 HTML 字符串
  var html = `
  <td style="text-align: left; vertical-align: middle; width: 300px;">${promptText}</td>
  <td style="text-align: center;">
    <audio controls="controls" style="width: 140px;">
      <source src="${promptAudioPath}" autoplay/>Your browser does not support the audio element.
    </audio>
  </td>
  <td style="text-align: left; vertical-align: middle;">${audioText}</td>
  <td style="text-align: center;">
    <audio controls="controls" style="width: 140px;">
      <source src="${audioPath}" autoplay/>生成失败
    </audio>
  </td>
`;

  // 获取表格元素
  var tbody = document.getElementById(id); // 替换为实际表格的 ID

  // 创建一个临时的 <tr> 元素
  var tr = document.createElement("tr");

  // 将 HTML 字符串设置为 <tr> 元素的 innerHTML
  tr.innerHTML = html;

  // 将 <tr> 元素添加到表格中
  tbody.appendChild(tr);
}

function add_tr_bylink(link_id, tr_id) {
  var linkElement = document.getElementById(link_id);

  fetch(linkElement.href)
    .then(response => response.text())
    .then(data => {
      data.split(/\r?\n/)
        .map(x => x.trim())
        .filter(x => x != '')
        .forEach(line => {
          add_tr(line, tr_id)
        })
      console.log(text);
    })
    .catch(error => {
      console.error('发生错误:', error);
    });
}

add_tr_bylink('text-genshin_nice','genshin');
add_tr_bylink('text-aishell2_nice', 'aishell2');
add_tr_bylink('text-test','genshen_others');
// window.onload = function () {
//   // add_tr_bylink('test-file', 'others');
// }
