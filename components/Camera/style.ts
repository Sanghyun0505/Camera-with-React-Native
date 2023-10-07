import styled from "styled-components/native";

export const CameraContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: #ddd;
`;

export const CameraWrapper = styled.View`
  width: 100%;
  height: 75%;
`;

export const CameraScreen = styled.View`
  width: 100%;
  height: 100%;
`;

export const CameraCaptureContainer = styled.View`
  width: 100%;
  height: 25%;
`;

export const CameraButtonContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
`;

export const CameraToggleButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: red;
`;

export const RevertingCameraButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TakingCameraButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: #fff;
  margin-top: 20px;
`;
