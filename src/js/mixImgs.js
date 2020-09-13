/**
 * Function that receives an array with the imgs for the game and returns an array with the imgs mixed and duplicated 
 * @param {The imgs in the game} imgs 
 */
function mixImgs(imgs){
    let usedNumbers = {};
    let mixedImgs = [];
    for (let i = 0; i < (imgs.length)*2; i++) {
        let index = Math.floor(Math.random() * (imgs.length));
        while (usedNumbers[index]===2) {
              index = Math.floor(Math.random() * (imgs.length));
        }
        if(usedNumbers[index]){
            usedNumbers[index] = 2;
        }else{
          usedNumbers[index] = 1;
        }
        mixedImgs.push(imgs[index]);
    }
    return mixedImgs
}

export default mixImgs;