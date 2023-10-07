import styled from "styled-components/native";

export const ImagesContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  row-gap: 10px;
  align-items: center;
  padding: 5% 0 5% 0;
  position: relative;
`;

export const CapturedImgContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const CapturedImgItemBox = styled.View`
  width: 400px;
  height: 300px;
  border-radius: 10px;
  border: 1px solid #ddd;
  overflow: hidden;
`;

export const CapturedImgItem = styled.Image`
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
`;

export const ClearButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: black;
  border-radius: 100px;
  font-weight: bold;
  font-size: 16px;

  position: absolute;
  right: 15px;
  bottom: 15px;
`;

export const NoneImgContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
