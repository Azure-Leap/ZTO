import { useRef, useEffect, useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Underline } from "./undurline";

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
  position: relative;
`;

const TitleStyle = styled(Typography)`
  font-size: 42px;
  text-align: center;
`;

export default function Test() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setActive(entry.isIntersecting);
      return;
    }
    setActive(false);
  };

  const options = useMemo(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: 0.75
    }),
    []
  );

  useEffect(() => {
    const container = ref.current;
    const observer = new IntersectionObserver(callback, options);
    if (container) observer.observe(container);


    return () => {
      if (container) observer.unobserve(container);
    };
  }, [ref, options]);


  
  return (
    <Grid>
      <Box>
        <TitleStyle ref={ref}>
          <LinkStyle href="#" color="inherit">
         Solution
            <Underline color="#fb9f18" time={0.5} trigger={active} size={4} />
          </LinkStyle>
        </TitleStyle>
      </Box>
  
    </Grid>
  );
}
