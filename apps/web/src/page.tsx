import { logger } from '../../packages/shared/utils/logger';

export default function Home() {
  logger("Hello from frontend!");
  return <h1>Frontend App</h1>;
}