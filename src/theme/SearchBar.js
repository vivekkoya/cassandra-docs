import React from "react";
import SearchBar from "@theme-original/SearchBar";
import { OramaSearchBox, OramaSearchButton } from "@orama/react-components";
export default function SearchBarWrapper(props) {
  return search();
}
function search() {
  return (
    <>
      <OramaSearchButton
        size="medium"
        colorScheme="system"
        themeConfig={{
          themeConfig: {
            colors: {
              dark: {
                "--background-color-primary": "#231102",
              },
              light: {
                "--background-color-primary": "#eeeeee",
              },
            },
          },
        }}
        // resultMap={{
        //   title: "name",
        //   description: "content",
        //   section: "category",
        // }}
        //
      >
        Search...
      </OramaSearchButton>
      <OramaSearchBox></OramaSearchBox>
    </>
  );
}
