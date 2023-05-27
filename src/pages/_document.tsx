import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentProps
} from 'next/document'

/**
 * Document组件
 */
function MyDocument(props: DocumentProps) {
  return (
    <Html>
      <Head>
        <link href="/favicon.ico" type="image/x-icon" rel="icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx)
  return { ...initialProps }
}

export default MyDocument
