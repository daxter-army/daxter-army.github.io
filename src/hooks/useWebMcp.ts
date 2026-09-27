import { useEffect } from "react";

import { skillItemsData, workItemsData } from "../data/data";

import { STATICS } from "../statics";

export function useWebMcp() {
    useEffect(() => {
        if (!("modelContext" in document)) return;

        const controller = new AbortController();
        const options = { signal: controller.signal };

        const registerTools = async () => {
            await document.modelContext?.registerTool(
                {
                    name: STATICS.WEB_MCP.PROFILE_TOOL.NAME,
                    title: STATICS.WEB_MCP.PROFILE_TOOL.TITLE,
                    description: STATICS.WEB_MCP.PROFILE_TOOL.DESCRIPTION,
                    inputSchema: {
                        type: "object",
                        properties: {},
                        additionalProperties: false,
                    },
                    annotations: {
                        readOnlyHint: true,
                    },
                    execute: async () => ({
                        name: STATICS.NAME,
                        summary: STATICS.BIO_DESC,
                        currentSituation: STATICS.PRESENT_SITUATION,
                        skills: skillItemsData.map(({ label }) => label),
                        github: STATICS.GITHUB_URL,
                        linkedin: STATICS.LINKED_URL,
                    }),
                },
                options
            );

            await document.modelContext?.registerTool(
                {
                    name: STATICS.WEB_MCP.PROJECT_SEARCH_TOOL.NAME,
                    title: STATICS.WEB_MCP.PROJECT_SEARCH_TOOL.TITLE,
                    description: STATICS.WEB_MCP.PROJECT_SEARCH_TOOL.DESCRIPTION,
                    inputSchema: {
                        type: "object",
                        properties: {
                            query: {
                                type: "string",
                                description:
                                    STATICS.WEB_MCP.PROJECT_SEARCH_TOOL.QUERY_DESCRIPTION,
                            },
                        },
                        additionalProperties: false,
                    },
                    annotations: {
                        readOnlyHint: true,
                    },
                    execute: async ({ query = "" }: { query?: string }) => {
                        const normalizedQuery = query.trim().toLowerCase();

                        return workItemsData
                            .filter(({ title, subTitle = "" }) =>
                                `${title} ${subTitle}`
                                    .toLowerCase()
                                    .includes(normalizedQuery)
                            )
                            .map(({ title, subTitle, link }) => ({
                                title,
                                description: subTitle,
                                url: link,
                            }));
                    },
                },
                options
            );
        };

        void registerTools().catch((error) => {
            if (!controller.signal.aborted) {
                console.error(STATICS.WEB_MCP.REGISTRATION_ERROR, error);
            }
        });

        return () => controller.abort();
    }, []);
}
