import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import {
  userCompositions,
  AllDesignComposition,
  TemplateDesign,
} from "../../../lib/contexts/Queries";
import SimpleMenu from "./simpleMenu";
import { Link } from "react-router-dom";
import { grid } from "@mui/system";
import Masonry from "react-masonry-css";
import "./gridView.css";
import { Loader } from "../../../pages/private/dashboard/workspace/loaders";
// import {BigPreloader}from"../../../pages/private/dashboard/workspace/styledComponent"
import { useSelector } from "react-redux";

const OuterDiv = styled.div`
  height: 40vh;
  margin: 0;
  position: relative;
  display: block;
  margin-right: 0px;
  flex: 1;
  overflow: hidden;
  &:hover {
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background-color: #c0c0c0;
    }
    ::-webkit-scrollbar-thumb {
      background: #696969;
      border-radius: 6px;
      height: 20px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #696969;
    }
    overflow-y: overlay;
  }
`;

const GridSection = styled.ul`
  padding: 0;
  display: flex;
  height: 70vh;
  width: 100%;
`;

const ImgOverlap = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #441b59;
  transition: all 0.3s linear;
  z-index: 10;
  cursor: pointer;
  border: 3px solid #e87855;
`;
const ImgOverlapDotsIcon = styled.div`
  position: absolute;
  right: 0;
  top: 5px;
  opacity: 0;
`;
const GridListView = styled.div`
  margin: 0 10px 20px 10px;
  color: #fbfbff;
  width: 100%;
  position: relative;
  &:hover ${ImgOverlapDotsIcon} {
    opacity: 1;
  }
  &:hover ${ImgOverlap} {
    opacity: 0.8;
  }
`;

const NewFeature = styled.img`
  //height: 100%;
  cursor: pointer;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 40%) 0 26px 24px -17px;
  transform-origin: center center;
  width: 100%;
  transition: all 0.3s ease;
`;

const ImgOverlapHead = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 14px;
  color: #fff;
  padding-top: 0;
  font-weight: 500;
  position: absolute;
  left: 0;
  right: 0;
  top: 72px;
`;
const ImgOverlapHeadSecond = styled.h3`
  margin: 0 0 0 3px;
  text-align: left;
  font-size: 13px;
  color: #fff;
  padding-top: 0;
  font-weight: 500;
`;
const ImgOverlapHeadSecondSpan = styled.span`
  margin: 0;
  text-align: left;
  font-size: 12px;
  color: #e87855;
  padding-top: 0;
  font-weight: 500;
  display: block;
`;
const OpenButton = styled.div`
  box-shadow: none;
  background-color: transparent;
  outline: none;
  border: 1px solid #e87855;
  width: 40%;
  height: 20%;
  color: white;
  text-transform: uppercase;
  position: absolute;
  font-weight: normal;
  vertical-align: middle;
  right: 0;
  left: 50px;
  &: hover {
    background-color: #e87855;
    color: #000;
  }
`;
const SelectButton = styled.div`
  box-shadow: none;
  outline: none;
  border: 1px solid #e6e6e8;
  width: 40%;
  height: 20%;
  color: white;
  text-transform: uppercase;
  position: absolute;
  font-weight: normal;
  vertical-align: middle;
  right: 0;
  left: 50px;
  &: hover {
    background-color: #e6e6e8;
    color: #000;
  }
`;

export default function GridView(props: any) {
  const [dataTemp, setDataTemp] = useState([]) as any;
  const [isAdmin, setIsAdmin] = useState(false);
  const [gridData, setGridData] = useState([]) as any;
  const [allDesignData, setAllDesignData] = useState([]) as any;
  const [selectIndex, setSelectIndex] = useState({
    idx: -1,
    isSelected: false,
  });
  const [offSet, setOffSet] = useState(0);
  const [apiFilter, setApiFilter] = useState(
    `{\"custom\":true,\"offset\":0,\"limit\":100}`
  );
  const tempScroll = useRef<HTMLDivElement>(null);
  const myDesignCount = useSelector((state: any) => {
    return state.myDesignCount;
  });
  // var isSelected = false;
  // const {
  //  data: tempData,
  //   loading: templateloading,
  //   error: templateError,
  // } = useQuery(templateCategories, {
  //   variables: {
  //     filter:
  //       '{"where":{"compositionId":"e16b7240-3af0-11ec-b097-2709b7f8c64e","composer_object":{"neq":null}}}',
  //     token: `${localStorage.getItem("token")}`,
  //   },
  // });
  // useEffect(()=>{
  //   if(tempData && tempData.GET_templateCategories )
  //   setDataTemp(tempData.GET_templateCategories)

  // },[tempData])
  const onTempScroll = () => {
    if (props.toSearch.length === 0) {
      if (tempScroll.current) {
        const { scrollTop, scrollHeight, clientHeight } = tempScroll.current;
        if (
          scrollTop + clientHeight + 1 >= scrollHeight &&
          myDesignCount > offSet + 20
        ) {
          setOffSet((oldValue: any) => {
            const newValue = oldValue + 20;
            return newValue;
          });
        }
      }
    }
  };

  useEffect(() => {
    if (props.menuName === "My Designs" && !props.toSearch) {
      setApiFilter(`{\"custom\":true,\"offset\":${offSet},\"limit\":20}`);
    }
    if (props.menuName === "All Design" && !props.toSearch) {
      setApiFilter(
        `{\"custom\":true,\"order\":\"createdAt DESC\",\"offset\":0,\"limit\":20,\"where\":{}}`
      );
    }
    if (props.menuName === "Templates" && !props.toSearch) {
      setApiFilter(
        `{\"custom\":true,\"order\":\"createdAt DESC\",\"offset\":0,\"limit\":5,\"where\":{}}`
      );
    }
    if (props.toSearch.length) {
      setGridData([]);
      setApiFilter(
        `{\"where\":{\"search\":"${props.searchValue}"},\"custom\":true,\"offset\":0,\"limit\":7}`
      );
    }
  }, [props.menuName, props.toSearch, offSet]);
  //-----------------------------My Design-------------------------------

  const { data, loading, error, refetch } = useQuery(
    props.menuName === "My Designs"
      ? userCompositions
      : props.menuName === "All Design"
      ? AllDesignComposition
      : TemplateDesign,
    {
      variables: {
        filter: apiFilter,
        token: `${localStorage.getItem("token")}`,
      },
    }
  );

  useEffect(() => {
    if (data) {
      if (props.menuName === "My Designs") {
        console.log(data, "my design");
        var allData = data.GET_users_compositions;
        var newData = allData.map((element: any) => ({
          // console.log(element);
          ...element,
          isSelected: false,
          // element.push({isSelected:false})
        }));
      } else if (props.menuName === "All Design") {
        console.log(data, " all deisgn");
        allData = data.GET_all_design_compositions;
        newData = allData.map((element: any) => ({
          // console.log(element);
          ...element,
          isSelected: false,
          // element.push({isSelected:false})
        }));
      } else {
        console.log(data, "templateDEsign");
        allData = data.GET_templates;
        newData = allData.map((element: any) => ({
          // console.log(element);
          ...element,
          isSelected: false,
          // element.push({isSelected:false})
        }));
      }
      console.log(newData);
      if (gridData && offSet) {
        setGridData((old: any) => {
          return [...old, ...newData];
        });
      } else {
        setGridData(newData);
      }
    }
  }, [data]);

  useEffect(() => {
    if (gridData) {
      props.setIsSelected(gridData.some((e: any) => e.isSelected === true));
    }
  }, [gridData]);

  useEffect(() => {
    //console.log(props.tempData)
    if (gridData && gridData.length && props.tempData) {
      //console.log(data.GET_users_compositions)
      // console.log(props.tempData)
      let c: any = [];
      for (var i = 0; i < gridData.length; i++) {
        // console.log(data.GET_users_compositions[i].categoryId)
        for (var j = 0; j < props.tempData.length; j++) {
          if (props.tempData[j].id === gridData[i].categoryId) {
            c[i] = {
              name: props.tempData[j].name,
              width: props.tempData[j].displayWidth,
              height: props.tempData[j].displayHeight,
            };
          }
        }
      }
      setDataTemp(c);
    }
  }, [gridData, props.tempData]);
  const updateList = () => {
    refetch();
    props.countRefetch();
  };
  useEffect(() => {
    const user: any = localStorage.getItem("user");
    const userData = JSON.parse(user);
    console.log(userData);
    for (let i of userData.roles) {
      if (i.name === "admin") {
        setIsAdmin(true);
      }
    }
  }, []);

  const OnSelectButton = (data: boolean, val: any) => {
    props.divEnable(data, val);
  };

  if (loading && offSet === 0)
    return (
      <div
        style={{
          position: "relative",
          width: "900px",
          height: "500px",
          marginTop: "-240px",
          marginRight: "250px",
        }}
      >
        <Loader />
      </div>
    );
  return (
    <OuterDiv onScroll={onTempScroll} ref={tempScroll}>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {gridData.map((val: any, index: number) => {
          return (
            <GridListView>
              <div style={{ position: "relative" }}>
                <NewFeature
                  src={
                    props.menuName === "Templates"
                      ? `${process.env.REACT_APP_S3_REDIRECT}/composer.templates.thumbs.staging/${val.templateId}.jpg`
                      : `${process.env.REACT_APP_S3_REDIRECT}/composer.compositions.thumbs.staging/${val.compositionId}.jpg`
                  }
                />
                <ImgOverlap style={{ opacity: val.isSelected && 0.8 }}>
                  {!isAdmin && (
                    <>
                      {dataTemp[index] && (
                        <ImgOverlapHeadSecond>
                          {dataTemp[index].name}
                          <ImgOverlapHeadSecondSpan>
                            {`(${dataTemp[index].width} x ${dataTemp[index].height})`}
                          </ImgOverlapHeadSecondSpan>
                        </ImgOverlapHeadSecond>
                      )}
                      <Link
                        to={{
                          pathname: "/dashboard/workspace",
                          state: {
                            composer_object: val.composer_object,
                            composer_id: val.compositionId,
                            editor: "image",
                          },
                        }}
                      >
                        {" "}
                        <ImgOverlapHead>Open</ImgOverlapHead>
                      </Link>
                    </>
                  )}
                  {isAdmin && (
                    <>
                      {dataTemp[index] && (
                        <ImgOverlapHeadSecond>
                          {dataTemp[index].name}
                          <ImgOverlapHeadSecondSpan>
                            {`(${dataTemp[index].width} x ${dataTemp[index].height})`}
                          </ImgOverlapHeadSecondSpan>
                        </ImgOverlapHeadSecond>
                      )}
                      <Link
                        to={{
                          pathname: "/dashboard/workspace",
                          state: {
                            composer_object: val.composer_object,
                            composer_id: val.compositionId,
                            editor: "image",
                          },
                        }}
                      >
                        <OpenButton
                          style={{ textAlign: "center", padding: "4px" }}
                        >
                          Open
                        </OpenButton>
                      </Link>
                      <SelectButton
                        style={{
                          marginTop: "3rem",
                          textAlign: "center",
                          padding: "4px",
                          backgroundColor: val.isSelected && "#e6e6e8",
                          color: val.isSelected && "#000",
                        }}
                        onClick={() => {
                          let newGridData: any[] = gridData;
                          let gridIndex = newGridData[index].isSelected;
                          newGridData[index].isSelected = !gridIndex;

                          setGridData([...newGridData]);

                          props.setThumbDetails(val);

                          // }, 1000);
                        }}
                      >
                        {val.isSelected ? "Deselect" : "Select"}
                      </SelectButton>
                    </>
                  )}
                </ImgOverlap>
              </div>
              <ImgOverlapDotsIcon style={{ zIndex: 200 }}>
                <SimpleMenu
                  {...val}
                  updateList={updateList}
                  showGrid={props.showGrid}
                />
              </ImgOverlapDotsIcon>
            </GridListView>
          );
        })}
      </Masonry>
    </OuterDiv>
  );
}
