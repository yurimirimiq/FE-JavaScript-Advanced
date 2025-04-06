let arr = [
    { part: "fe", name: "수진", age: 22 },
    { part: "fe", name: "병윤", age: 23 },
    { part: "fe", name: "보연", age: 21 },
    { part: "staff", name: "수빈", age: 24 },
    { part: "be", name: "기현", age: 25 }
  ];
  
  // 1. staff 제거
  arr = arr.filter(member => member.part !== "staff");
  
  // 2. "fe"는 남기되 "보연"은 제거
  arr = arr.filter(member => !(member.part === "fe" && member.name === "보연"));
  
  // 3. 나이 내림차순 정렬
  arr.sort((a, b) => b.age - a.age);
  
  // 4. 이름만 뽑아 배열 만들기
  const names = arr.map(member => member.name);
  console.log("최종 이름 배열:", names);
  
  // 5. 이름 한 줄씩 출력
  names.forEach(name => console.log(name));
  