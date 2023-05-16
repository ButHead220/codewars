// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

// So:

// Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

// My solution

function mostLikely(prob1,prob2){
    let res1 = prob1.split(":")
    let res2 = prob2.split(":")
    if (res1[0] / res1[1] > res2[0] / res2[1]){
      return true
    }
    return false
  }