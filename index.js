#!/usr/bin/env node
import chalk from 'chalk';
import config from 'config'
import nodemailer from 'nodemailer'
import * as mqtt from "mqtt";

console.log(chalk.red("Hello ") + chalk.green("World") + chalk.red("!"));
const mqttserverconfig = config.get("MQTTServer.host");
console.log(chalk.blue(mqttserverconfig));