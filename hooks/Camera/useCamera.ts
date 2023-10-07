import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { CameraCapturedImg } from "../../stores/Camera/camera.store";
import { CameraType, Camera as ExpoCamera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export const useCamera = () => {
  const cameraRef = useRef<any>(null);
  const [cameraType, setCameraType] = useState(CameraType.front);
  const setCapturedImage = useSetRecoilState<string[]>(CameraCapturedImg);

  const toggleCameraType = () => {
    setCameraType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };
  const navigation = useNavigation<any>();

  const openCameraHandler = async () => {
    // 카메라에 대한 접근 권한을 얻을 수 있는지 묻는 함수입니다.
    const { status } = await ExpoCamera.requestCameraPermissionsAsync();

    // 권한을 획득하면 status가 granted 상태가 됩니다.
    if (status !== "granted") {
      // Camera 컴포넌트가 있는 CameraScreen으로 이동합니다.
      Alert.alert("카메라 접근 허용은 필수입니다.");
      navigation.navigate("Home");
    }
  };

  const takePictureHandler = async () => {
    // cameraRef가 없으면 해당 함수가 실행되지 않게 가드
    if (!cameraRef.current) return;

    // takePictureAsync를 통해 사진을 찍습니다.
    // 찍은 사진은 base64 형식으로 저장합니다.
    await cameraRef.current
      .takePictureAsync({
        base64: true,
      })
      .then((data: any) => {
        setCapturedImage((prev) => [...prev, data.uri]);
      });
  };

  return {
    cameraRef,
    cameraType,
    toggleCameraType,
    openCameraHandler,
    takePictureHandler,
  };
};
