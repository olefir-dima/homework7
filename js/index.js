const array = [1, "2", 5, 3, "5", 4, 5, 6, "7"];
let resArray1 = [];
let resArray2 = [];

document.getElementById("arr").innerHTML = arr2String(array);

function runHW() {
  resArray1 = removeElement(array, 5);
  console.log("loops " + resArray1);
  document.getElementById("resArray1").innerHTML = arr2String(resArray1);

  resArray2 = removeElement2(array, 5);
  console.log("filter " + resArray2);
  document.getElementById("resArray2").innerHTML = arr2String(resArray2);
}

function removeElement(array, el) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== el) continue;
    for (let j = i + 1; j < array.length; j++) {
      array[j - 1] = array[j];
    }
    array.length--;
    i--;
  }
  return array;
}

function removeElement2(array, el) {
  return array.filter((currEl) => currEl !== el);
}

function arr2String(arr) {
  let strArr = "";
  for (const el of arr) {
    if (typeof el === "string") {
      strArr += ", '" + el + "'";
    } else {
      strArr += ", " + el;
    }
  }
  return "[" + strArr.substring(1) + " ]";
}
