import * as S from "./style";
import { AutoFocus, Camera as ExpoCamera, CameraType } from "expo-camera";
import { useEffect } from "react";
import { Text } from "react-native";
import { useCamera } from "../../hooks/Camera/useCamera";

export default function Camera() {
  const { ...attr } = useCamera();

  useEffect(() => {
    attr.openCameraHandler();
  }, []);

  return (
    <S.CameraContainer>
      <S.CameraWrapper>
        <ExpoCamera
          ref={attr.cameraRef}
          type={attr.cameraType}
          zoom={0}
          autoFocus={AutoFocus.on}
          ratio="16:9"
        >
          <S.CameraScreen />
        </ExpoCamera>
      </S.CameraWrapper>
      <S.CameraCaptureContainer>
        <S.CameraButtonContainer>
          <S.RevertingCameraButton onPress={attr.toggleCameraType}>
            <Text style={{ color: "#fff" }}>카메라 전환</Text>
          </S.RevertingCameraButton>
          <S.TakingCameraButton onPress={attr.takePictureHandler}>
            <Text style={{ color: "#fff" }} />
          </S.TakingCameraButton>
        </S.CameraButtonContainer>
      </S.CameraCaptureContainer>
    </S.CameraContainer>
  );
}
