/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PropertyEntity } from './PropertyEntity';
import { TemplateEntity } from './TemplateEntity';
/**
 * 代码模板组实体
 * @export
 * @interface CodeTemplateGroupEntity
 */
export interface CodeTemplateGroupEntity {
  /**
   * 元数据ID
   * @type {string}
   * @memberof CodeTemplateGroupEntity
   */
  id?: string;
  /**
   * 元数据代码
   * @type {string}
   * @memberof CodeTemplateGroupEntity
   */
  code: string;
  /**
   * 元数据名称
   * @type {string}
   * @memberof CodeTemplateGroupEntity
   */
  name: string;
  /**
   * 元数据描述
   * @type {string}
   * @memberof CodeTemplateGroupEntity
   */
  description?: string;
  /**
   * 属性列表
   * @type {Array<PropertyEntity>}
   * @memberof CodeTemplateGroupEntity
   */
  properties: Array<PropertyEntity>;
  /**
   * 领域转换器ID
   * @type {string}
   * @memberof CodeTemplateGroupEntity
   */
  domainConverterId: string;
  /**
   * 代码模板列表
   * @type {Array<TemplateEntity>}
   * @memberof CodeTemplateGroupEntity
   */
  templates: Array<TemplateEntity>;
}
