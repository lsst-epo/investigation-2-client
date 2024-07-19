import { useLayoutEffect, useState } from "react";

const useMatchesMediaQuery = (queries: Array<string>) => {
  const [matches, setMatches] = useState<Array<string>>([]);

  useLayoutEffect(() => {
    const matchMedia = queries.map((query) => window.matchMedia(query));

    const handleChange = () => {
      setMatches(
        matchMedia
          .map((match) => (match.matches ? match.media : ""))
          .filter((match) => !!match)
      );
    };

    matchMedia.forEach((match) => {
      if (match.addListener) {
        match.addListener(handleChange);
      } else {
        match.addEventListener("change", handleChange);
      }
    });

    return () => {
      matchMedia.forEach((match) => {
        if (match.removeListener) {
          match.removeListener(handleChange);
        } else {
          match.removeEventListener("change", handleChange);
        }
      });
    };
  }, [queries]);

  return matches;
};

export default useMatchesMediaQuery;
