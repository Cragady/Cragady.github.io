import MDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const markdownTest = `~~Hello, World!!~~ [Test Link1!](https://www.google.com)\n\n<p>Noice!</p> Be sure to replace this with actual data!`;

interface MarkdownProps {
  // eslint-disable-next-line
  children?: any;
  markdownData?: string;
}

export default function Markdown(props: MarkdownProps) {
  const passedData = props.children ? props.children : props.markdownData;
  const markdown = passedData || markdownTest;

  return (
    <MDown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{markdown}</MDown>
  )
}
