#!/usr/bin/env node

'use strict';

// 获取当前node环境的版本 比如 16.15.0
const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const major = semver[0];

if (major < 14) {
	console.error(
		'You are running Node ' +
			currentNodeVersion +
			'.\n' +
			'Create Template App requires Node 14 or higher. \n' +
			'Please update your version of Node.'
	);
	/**
	 * exit 只执行同步操作，在调用后立即退出，若还有在事件循环中的事件则会被放弃
	 * 参数不传是会取值exitCode 有参数是覆盖exitCode 默认值(success)0
	 *  */
	process.exit(1);
}

const { init } = require('./createTemplate');

init();
