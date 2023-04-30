import styled from '@emotion/styled';

export const ProfileCont = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 400px;
  height: 400px;
  padding: 15px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  text-align: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
`;

export const ProfilePic = styled.img`
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
`;
export const ProfileTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const ProfileStats = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 15px;
  min-width: 90px;
  border: 4px solid tomato;
  border-style: dotted;
`;
