export default function loadDaummap() {
  return new Promise((resolve, reject) => {
    document.write(
      `<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b49bcb6b071ad1408bb3e00bec24a565"></script>`
    );
    window.onload = () => {
      var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      var options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
      };

      new window.daum.maps.Map(container, options); //지도 생성 및 객체 리턴
      resolve();
    };
  });
}
