import * as vscode from "vscode";
import { newRoute } from "./commands";

/**
 * This method is called when the extension is activated.
 *
 * The extension is activated the very first time the command is executed.
 *
 * @param {vscode.ExtensionContext} context
 * @returns The same instance of the extension context passed in.
 */
export function activate(
  context: vscode.ExtensionContext
): vscode.ExtensionContext {
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.new-route", newRoute)
  );
  return context;
}

export function deactivate() {}
