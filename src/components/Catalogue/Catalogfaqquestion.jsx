
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import IconButton from "@mui/material/IconButton";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Catalogfaqquestion({ data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        margin: "1vw",
        border: "none",
        boxShadow: "1px 5px 10px #00000050",
        padding: "0.2vw 0.5vw",
        marginBottom: "01vw",

        transition: "all 0.5s",
      }}
    >
      <CardActions disableSpacing>
        <div
          className="workhistryboxtitle"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {" "}
          <div>{data?.question}</div>
        </div>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div
          style={{ fontSize: "0.95vw", marginLeft: "0.5vw" }}
          className="workhistryboxdata"
        >
          {data?.answer?.split("\r").length > 1 ? (
            <textarea
              style={{
                height: "fit-content",
                width: "78vw",
                marginTop: "0.5vw",
                color: "black",
                border: "none",
                outline: "none",
                background: "none",
              }}
              className="dataCarddescitptiontextarera1"
              value={data?.answer}
              name=""
              id=""
              rows={
                data?.answer?.split("\r").length > 1
                  ? data?.answer?.split("\r").length
                  : ""
              }
              disabled
            ></textarea>
          ) : (
            <div
              style={{
                height: "fit-content",
                width: "78vw",
                marginTop: "0.5vw",
                color: "black",
              }}
              className="data_decriptipnpopup"
            >
              {data?.answer}
            </div>
          )}
        </div>
      </Collapse>
    </Card>
  );
}
