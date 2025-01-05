import React from "react";
import { connect } from "react-redux";
import { setData } from "../reducer/data";

function GrandParent(props) {
  const { data } = props;
  return <div>{data}</div>;
}

const mapsStateToProps = (state) => ({
  data: state.data.data,
});

const mapsDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setData(data)),
});

const connector = connect(mapsStateToProps, mapsDispatchToProps);

export default connector(GrandParent);
