import { magicFn } from "../lib/out/main.js";
import cap from "capitalize";

const r = magicFn(cap.words("hello world"));
console.log('Result of magicFn:', r);