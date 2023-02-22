var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.49655444998249, 127.0247519188435), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// place-list 데이터
const placeList = [
  { name: "서울역 ☑️", position: [37.5546716286321, 126.97059786645119] },
  { name: "부산역 ☑️", position: [35.115090395117946, 129.0414110369002] },
  { name: "제주도 ☑️", position: [33.50707172765001, 126.49276474148037] },
  { name: "독도  ☑️", position: [37.24144723477072, 131.86579187989412] },
];

// place-list 그리기
placeList.forEach((place) => {
  addPlaceItem(place);
  let marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(...place.position),
  });
  marker.setMap(map);
});

function addPlaceItem(placeItem) {
  const elemUl = document.getElementById("place-list");
  const elemLi = document.createElement("li");
  var nodeText = document.createTextNode(placeItem.name);
  elemLi.appendChild(nodeText);
  elemLi.addEventListener("click", () => {
    moveTo(placeItem.position);
  });
  elemUl.appendChild(elemLi);
}

function moveTo(position) {
  map.setCenter(new kakao.maps.LatLng(position[0], position[1]));
}
