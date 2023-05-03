import React from "react";

import Catalogfaqquestion from "./Catalogfaqquestion";

export default function Catelogfaqquestion({ data, width }) {
  return (
    <>
      {data?.Q1 ? (
        <Catalogfaqquestion data={{ question: data?.Q1, answer: data?.A1 }} />
      ) : (
        ""
      )}
      {data?.Q2 ? (
        <Catalogfaqquestion data={{ question: data?.Q2, answer: data?.A2 }} />
      ) : (
        ""
      )}
      {data?.Q3 ? (
        <Catalogfaqquestion data={{ question: data?.Q3, answer: data?.A3 }} />
      ) : (
        ""
      )}
      {data?.Q4 ? (
        <Catalogfaqquestion data={{ question: data?.Q4, answer: data?.A4 }} />
      ) : (
        ""
      )}
      {data?.Q5 ? (
        <Catalogfaqquestion data={{ question: data?.Q5, answer: data?.A5 }} />
      ) : (
        ""
      )}
      {data?.Q6 ? (
        <Catalogfaqquestion data={{ question: data?.Q6, answer: data?.A6 }} />
      ) : (
        ""
      )}
      {data?.Q7 ? (
        <Catalogfaqquestion data={{ question: data?.Q7, answer: data?.A7 }} />
      ) : (
        ""
      )}
      {data?.Q8 ? (
        <Catalogfaqquestion data={{ question: data?.Q8, answer: data?.A8 }} />
      ) : (
        ""
      )}
      {data?.Q9 ? (
        <Catalogfaqquestion data={{ question: data?.Q9, answer: data?.A9 }} />
      ) : (
        ""
      )}
      {data?.Q10 ? (
        <Catalogfaqquestion data={{ question: data?.Q10, answer: data?.A10 }} />
      ) : (
        ""
      )}
    </>
  );
}
