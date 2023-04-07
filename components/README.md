# Next frontend

Next.js frontend intended to be used with the Rubin EPO [craft-cms-template](https://github.com/lsst-epo/craft-cms-template/).

## Local development

0. Ensure that the Craft CMS container is running and functioning correctly by going to http://localhost:8080/api, if everything is working fine you should see some message about a missing GraphQL query
1. Create a `.env` file in the root of your project based on the `.env.local.sample`
1. Install dependencies `yarn`
1. Start the dev server `yarn dev`

### Components

Changed from previous iterations of the template, many atomic components have been removed from this repository in favor of using the [@rubin-epo/epo-react-lib](https://github.com/lsst-epo/epo-react-lib/tree/main/packages/epo-react-lib) package.

Global styles and fonts are also imported from this library, although some of the resets and other basic styling have been preserved as SASS inside of this template.

The `epo-react-lib` styles are added to the application in `_app.js` using `styled-components` [global styles helper](https://styled-components.com/docs/api#createglobalstyle). Following that, `styles.scss` is imported in the same page.

```
import { GlobalStyles } from "@rubin-epo/epo-react-lib"; <-- styled-components
import styles from "@/styles/styles.scss"; <-- SASS stuff

function Client({ Component, pageProps }) {
  return (
    <UIDReset>
      <GlobalStyles />
      <Component {...pageProps} />
    </UIDReset>
  );
}
```

Components can be imported and used across the application.

```
import {Container} from "@rubin-epo/epo-react-lib";

export default function Component() {
  return <Container />
}
```

### Localization

This application is localized using a combination if i18next, Next.js, and CraftCMS. The following outlines the role each piece plays:

#### Next.js

In the `next.config.js` a localization setup is defined that will tell Next the default locale and available locales. Next uses this information to do [sub-path routing](https://nextjs.org/docs/advanced-features/i18n-routing). The template contains the following config as a default:

```
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  }
```

English language pages will not have a locale prefix, Spanish language pages will be prefixed with `es/`

Example:

```
/ <-- English homepage

/es <-- Spanish homepage

/test-page <-- English demo page

/es/test-page <-- Spanish demo page
```

Adding this configuration to Next.js will also add `locale` `locales` and `defaultLocale` parameters to the Next router.

#### CraftCMS

All CMS content is localized using CraftCMS. Craft has separate sites defined for each locale that can be accessed during editing. In GraphQL queries, `site` is the parameter passed to Craft that will determine which locale to retrieve. For the default locale, the site is named `default` and for other locales it uses the two digit locale identifier.

```
export async function getEntryDataByUri(uri, site = "default", previewToken) {
  const query = gql`
    ${homepageFragment}
    ${pageFragment}
    ${allPageBlocksFragment}
      {
        entry (site: "${site}", uri: "${uri}") {
          ...homepageFragment
          ...pageFragment
        }
      }
    `;
  const data = await queryAPI(query, null, previewToken);
  return data.entry;
}

getEntryDataByUri("__home__") <-- will retrieve the English homepage content
getEntryDataByUri("__home__", "es") <-- will retrieve the Spanish homepage content

```

#### i18next

To localize components with static text, i18next is included. To avoid hydration issues, i18next is always initialized in English and then switched in `[[...uriSegments]].tsx` to the language set in the Next.js router.

If you need to change the language of your application, make sure that i18next and Next.js stay in sync, with Next.js being the source of truth.

There is an annotated demo language switcher component called `LanguageSelect` that demonstrates how to perform language changes.

## Running the client within a Docker container

Running the client within a container is a good way to test deployment in a production-like environment.

There is one crucial thing to keep in mind when configuring your local client to run in a Docker container: Docker containers run in an isolated network that have a different concept of the usage of "localhost". As such, despite the fact that the Craft CMS container may be exposed at localhost on port 8080 on the host machine (your laptop), within the client container "localhost" is local to that container. In order for the client container to be able to communicate with the Craft CMS container you need to know the Craft CMS container's gateway IP address.

Luckily, a node.js script is bundled with this code and Docker allows for arguments to be passed into a `docker build` command.

In order to build the Docker client image **ensure the API project is running** then enter the following command in the root project folder:

```

docker build -t epo/rubin_ui . --build-arg API_IP=$(node getApiGatewayURL) --build-arg API_PORT=8080

```

As mentioned, if the Craft CMS container project is not running within a Docker container before running the above command then the build may succeed, but will have broken links, images, and missing content.

Finally, once the image is built, create/start the Docker container with the following command:

```

docker run -p 3000:3000 epo/rubin_ui

```

## Finding the Craft CMS container's IP address

### Automated:

For your convenience, a node.js script has been included in this repo that grabs the Craft CMS container Docker gateway IP and logs it to the terminal. Ensure the Craft CMS container is running, then in the terminal enter:

```

node getApiGatewayURL

```

### Manual:

1. Ensure that the Craft CMS container is running and functioning correctly by going to http://localhost:8080/api, if everything is working fine you should see some message about a missing GraphQL query
2. In the terminal, enter the command `docker network ls` and you should she text table output - under the "NAME" column verify that you see one row with the value of the Craft CMS container
3. Enter the command `docker network inspect <NAME>`
4. The ouput from the above command will be a JSON object, the gateway IP can be found at: IPAM.Config.Gateway

This IP will change between bringing up and down the container, so keep in mind that you'll need to do this step everytime you bring the Craft CMS containers down and back up.

```

```
