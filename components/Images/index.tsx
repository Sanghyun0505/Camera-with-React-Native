import { useRecoilState } from "recoil";
import * as S from "./style";
import { CameraCapturedImg } from "../../stores/Camera/camera.store";
import { Text, ScrollView } from "react-native";

export default function Images() {
  const [campturedImg, setCampturedImg] = useRecoilState(CameraCapturedImg);

  return (
    <S.ImagesContainer>
      {campturedImg.length > 0 ? (
        <>
          <ScrollView>
            {/* ScrollView로 감싸기 */}
            <S.CapturedImgContainer>
              {campturedImg.map((item, idx) => (
                <S.CapturedImgItemBox key={idx}>
                  <S.CapturedImgItem source={{ uri: item }} />
                </S.CapturedImgItemBox>
              ))}
            </S.CapturedImgContainer>
          </ScrollView>
          <S.ClearButton onPress={() => setCampturedImg([])}>
            <Text style={{ color: "#fff" }}>X</Text>
          </S.ClearButton>
        </>
      ) : (
        <S.NoneImgContainer>
          <Text>사진이 없습니다!</Text>
        </S.NoneImgContainer>
      )}
    </S.ImagesContainer>
  );
}
