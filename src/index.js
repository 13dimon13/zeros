module.exports = function zeros(expression) {
  // your solution
  var arr = expression.split('*');

  var allResult = 0;

  var num = 0;

  for (var i=0; i<arr.length; i++){

    var element =  arr[i];

    var arrSmile = element.split('');

    var lenArr = arrSmile.length;

    var index = arrSmile.indexOf('!');

    var razn = lenArr-index;

    var newArr = arrSmile.slice(0,index);

   
   if(newArr.length>1){
     var strArr = newArr.join('');
     var bigNum = Number(strArr);
     newArr[0] = bigNum;
   }

    if (razn == 1) {

      res = 0;

while(newArr[0] > 1)

{

  newArr[0] /= 5;

  res += Math.floor(newArr[0]);

}
    }
      else {

  if(newArr[0]%2 != 0){
    num++;
  }
  
        res = 0;

  if(newArr[0]%2 == 0){

    while(newArr[0] > 1)

{

  newArr[0] /= 5;

  res += Math.floor(newArr[0]);

}

res = Math.floor(res/2);

  }

  else{
        switch (true) {
  case (newArr[0] < 5):
    res;
    break;
  case (5 <= newArr[0] && newArr[0]< 15) :
  res = 1;
    break;
    case (15 <= newArr[0] && newArr[0]< 25) :
  res = 2;
    break;
    case (25 <= newArr[0] && newArr[0]< 27) :
  res = 4;
    break;
    case (newArr[0] == 27) :
  res = 3;
    break;
    case (27 < newArr[0] && newArr[0]< 35) :
  res = 4;
    break;
    case (35 <= newArr[0] && newArr[0]< 45) :
  res = 5;
    break;
    case (45 <= newArr[0] && newArr[0]< 55) :
  res = 6;
    break;
    case (55 <= newArr[0] && newArr[0]< 65) :
  res = 7;
    break;
    case (65 <= newArr[0] && newArr[0]< 75) :
  res = 8;
    break;
    case (75 <= newArr[0] && newArr[0]< 85) :
  res = 9;
    break;
    case (85 <= newArr[0] && newArr[0]< 95) :
  res = 11;
    break;
  default:
  res = 12;
}
  }
      
      }

      if(arr.length == num)  {
          allResult = 0;
        }  
        else{
          allResult += res;
        } 

        }
       
return (allResult);
  }
