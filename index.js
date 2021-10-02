const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}


const readme = `\
### Hi there 👋


⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %


---


⏰ Updated on ${new Date().toUTCString()}


---
### My GitHub Contributions    
![](https://raw.githubusercontent.com/AhDai1/AhDai1/main/assets/github-contribution-grid-snake.svg)          
### About me      
[![Angola peng's GitHub stats](https://github-readme-stats.vercel.app/api?username=AhDai1&show_icons=true&theme=radical)](https://github.com/anuraghazra/github-readme-stats)
![Angola peng's Most used languages](https://github-readme-stats.vercel.app/api/top-langs/?username=AhDai1&layout=compact&hide_border=true&langs_count=10)


I'm AhDai, a programmer who loves coding.

- 🔭 I’m currently studying in HUT, hoping to live a better life. And always stay positive.
- 🤔 My blog 👉 https://ahdai1.github.io
- 📫 My E-mail: 1305377980@qq.com        


\
`

console.log(readme)
