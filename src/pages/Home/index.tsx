"use client";
import BottomBar from "@/components/BottomBar";
import ContentDropdown from "@/components/ContentDropdown";
import ContentType from "@/components/ContentType";
import NavBar from "@/components/NavBar";
import OutputTextLength from "@/components/OutputTextLength";
import PageHeading from "@/components/PageHeading";
import PageWrapper from "@/components/PageWrapper";
import Col from "@/components/common/Col";
import ContentTypeProvider from "@/providers/ContentTypeProvider";
import { FC } from "react";

const Home: FC = () => {
  return (
    <Col>
      <NavBar />
      <PageWrapper>
        <PageHeading />
        <ContentTypeProvider>
          <ContentType />
          <ContentDropdown />
        </ContentTypeProvider>
        <OutputTextLength />
      </PageWrapper>
      <BottomBar />
    </Col>
  );
};

export default Home;
