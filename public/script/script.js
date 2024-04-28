console.log("%c┬ ┬┌─┐┬  ┌─┐┌─┐┌┬┐┌─┐  ┌┬┐┌─┐  ┬┌─┌┐┌┌─┐┬ ┬┌─┐┌─┐─┐ ┬ ┌┐┌┌─┐┌┬┐"+
            "\n│││├┤ │  │  │ ││││├┤    │ │ │  ├┴┐││││ ││││└─┐├┤ ┌┴┬┘ │││├┤  │ "+
            "\n└┴┘└─┘┴─┘└─┘└─┘┴ ┴└─┘   ┴ └─┘  ┴ ┴┘└┘└─┘└┴┘└─┘└─┘┴ └─o┘└┘└─┘ ┴ ", 
            'color:#fd498d;font-size:20px;text-shadow: 0px 0px 10px #FF0000;');
console.log("%c欢迎来到知性，一个性教育网站。如果你觉得网站代码有什么问题，也欢迎发邮件联系。",
            'color:#fff;font-size:20px;text-shadow: 0px 0px 3px #FF0000;font-family:思源黑体,黑体,苹方,hans');
// let nowDate = new Date();
// let startDate = new Date("2021-02-06T00:00:00");
// let founded = Math.floor((nowDate.getTime() - startDate.getTime())/1000/60/60/24)-1;
// document.querySelector("#countDays").textContent = `📅 知性已成立 ${founded} 天。`;


document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("switch-lang-zh-hans").textContent = "简体中文";
    document.getElementById("switch-lang-zh-tw").textContent = "臺灣正體";

    if(!localStorage.getItem("userLang")){
      const currentPath = window.location.pathname;
      const userLanguages = navigator.languages;
      for(let i = 0; i < userLanguages.length; i++) {
        let lang = userLanguages[i];
        if(lang.startsWith("zh")) {
          if(
              lang.includes("Hans") ||
              lang.includes("CN")   ||
              lang.includes("MY")   ||
              lang.includes("SG")
          ) {
            if(currentPath.startsWith("/zh-tw")) window.location.href = currentPath.replace(/^\/zh-tw/, "");
            else return;
          }
    
          else if(
              lang.includes("Hant") ||
              lang.includes("TW")   ||
              lang.includes("HK")   ||
              lang.includes("MO")
          ) {
            if(!currentPath.startsWith("/zh-tw")) window.location.href = "/zh-tw" + currentPath;
            else return;
          }
        }
      }
    
    }
    

    var references = document.querySelectorAll('sup.reference');
    references.forEach(function(reference) {
      reference.addEventListener('click', function(event) {
        var referenceId = event.currentTarget.id;
        var anchorElement = reference.querySelector('a');
        if (anchorElement) {
          highlightText(referenceId);
        }
      });
    });

    function highlightText(referenceId) {
      var textId = 'cite_note-' + referenceId.substring(9);
      var textElement = document.getElementById(textId);
      if (textElement) {
        textElement.classList.add('highlight-reference');
        setTimeout(function() {
          textElement.classList.remove('highlight-reference');
        }, 5000); 
      }
    }
});