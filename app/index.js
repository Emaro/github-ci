import { magicFn } from "../lib";
import { words } from "capitalize";

const r = magicFn(words("hello world"));
console.log('Result of magicFn:', r);