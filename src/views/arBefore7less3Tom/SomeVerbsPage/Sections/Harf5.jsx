import React from "react";
import Pills from "components/Pills";
import data from "api/verbs/someVerbs/harf5";

class Harf5 extends React.Component {
  render() {
    return (
      <div id="uridu">
        <h2 className="title h2ar contrast">اِشترَى - يَشتَري</h2>
        <Pills data={data} />
      </div>
    );
  }
}

export default Harf5;
