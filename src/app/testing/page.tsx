"use client";
import React, { useState } from "react";
import { Button } from "@/components";
import Notice from "@/components/Notice";

const Testing = () => {
  const [notice, setNotice] = useState(false);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Button onClick={() => setNotice(true)}>Show</Button>
      <Notice
        open={notice}
        setOpen={setNotice}
        variant="default"
        noticeTitle="Tokyo Tokyo Tokyo Tokyo Tokyo"
        position="top-left"
      />
      <Notice
        open={notice}
        setOpen={setNotice}
        variant="info"
        noticeTitle="Tokyo Tokyo Tokyo Tokyo Tokyo"
        position="top-right"
        showIcon={false}
      ></Notice>
      <Notice
        open={notice}
        setOpen={setNotice}
        variant="error"
        noticeTitle="Tokyo Tokyo Tokyo Tokyo Tokyo"
        position="top-center"
      />
      <Notice
        open={notice}
        setOpen={setNotice}
        variant="warning"
        noticeTitle="Tokyo Tokyo Tokyo Tokyo Tokyo"
        position="bottom-center"
      />{" "}
      <Notice
        open={notice}
        setOpen={setNotice}
        variant="success"
        noticeTitle="Tokyo Tokyo Tokyo Tokyo Tokyo"
        position="bottom-left"
      />{" "}
      <Notice
        open={notice}
        setOpen={setNotice}
        noticeTitle="Tokyo Tokyo Tokyo Tokyo Tokyo"
        position="bottom-right"
      />
    </div>
  );
};

export default Testing;
